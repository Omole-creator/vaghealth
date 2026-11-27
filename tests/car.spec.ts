import { test, expect } from "@playwright/test";

test.describe("/car (DUSKWAY visor)", () => {
  // Never let a test order reach the live pixel: it would be recorded as a real sale.
  test.beforeEach(async ({ context }) => {
    await context.route(/facebook\.(net|com)/, (route) => route.abort());
  });

  test("headline, videos, offer and form are visible", async ({ page }) => {
    await page.goto("/car");
    await expect(page.getByRole("heading", { level: 1, name: /new 2-in-1 shield clips onto your car visor/i })).toBeVisible();
    await expect(page.locator("header video")).toHaveCount(2);
    await expect(page.getByTestId("pick-2")).toBeVisible();
    await expect(page.getByTestId("order-form")).toBeVisible();
  });

  test("the hero never shows a price", async ({ page }) => {
    await page.goto("/car");
    await expect(page.locator("header").first()).not.toContainText("₦");
  });

  test("the contact number shown is 0905, not the order line", async ({ page }) => {
    await page.goto("/car");
    const link = page.locator("footer a");
    await expect(link).toHaveText("0905 274 5033");
    await expect(link).toHaveAttribute("href", "https://wa.me/2349052745033");
  });

  test("every order CTA points at the in-page form", async ({ page }) => {
    await page.goto("/car");
    const ctas = page.getByTestId("car-cta");
    // Hero + close. The bundle cards' "Choose" buttons (pick-*) also lead to #order.
    expect(await ctas.count()).toBeGreaterThanOrEqual(2);
    for (const href of await ctas.evaluateAll((els) => els.map((e) => e.getAttribute("href")))) {
      expect(href).toBe("#order");
    }
  });

  const FORM_API = "https://api.web3forms.com/submit";

  async function fillValidOrder(page: import("@playwright/test").Page) {
    // Retried: in dev the first click can land before React has hydrated the button.
    await expect(async () => {
      await page.getByTestId("pick-3").click();
      await expect(page.getByTestId("order-total")).toHaveText("₦35,000", { timeout: 1000 });
    }).toPass();
    await page.locator("#name").fill("Chinedu Okafor");
    await page.locator("#whatsapp").fill("0803 123 4567");
    await page.locator("#email").fill("chinedu@example.com");
    await page.locator("#address").fill("12 Allen Avenue, Ikeja");
    await page.locator("#state").selectOption("Lagos");
    await page.locator("#confirm").check();
  }

  test("package sits between state and best time to deliver", async ({ page }) => {
    await page.goto("/car");
    const form = page.getByTestId("order-form");
    const y = async (sel: string) => (await form.locator(sel).first().boundingBox())!.y;
    const state = await y("#state");
    const pkg = await y('[data-testid="package-1"] >> xpath=..');
    const time = await y("#time");
    expect(state).toBeLessThan(pkg);
    expect(pkg).toBeLessThan(time);
  });

  test("invalid form is not sent", async ({ page }) => {
    let sent = false;
    await page.route(FORM_API, (route) => {
      sent = true;
      return route.fulfill({ json: { success: true } });
    });
    await page.goto("/car");
    await page.getByTestId("order-submit").click();
    await expect(page.getByText(/valid Nigerian number/i)).toBeVisible();
    expect(sent).toBe(false);
  });

  test("valid form posts every field to Web3Forms, in form order, and never opens WhatsApp", async ({ page }) => {
    let body: Record<string, unknown> = {};
    let whatsapp = false;
    await page.route(FORM_API, (route) => {
      body = route.request().postDataJSON();
      return route.fulfill({ json: { success: true } });
    });
    await page.route("https://wa.me/**", (route) => {
      whatsapp = true;
      return route.fulfill({ body: "ok" });
    });
    await page.goto("/car");
    await fillValidOrder(page);
    await page.getByTestId("order-submit").click();

    await expect(page.getByTestId("order-done")).toContainText("Thank you, Chinedu");
    expect(body.access_key).toBeTruthy();
    const order: [string, string][] = [
      ["Full name", "Chinedu Okafor"],
      ["WhatsApp number", "0803 123 4567"],
      ["Email", "chinedu@example.com"],
      ["Delivery address", "12 Allen Avenue, Ikeja"],
      ["State", "Lagos"],
      ["Package", "3 Visors + 1 FREE (4 visors)"],
      ["Total", "₦35,000"],
      ["Best time to deliver", "Any time"],
      ["Payment", "Pay on delivery"],
      ["Delivery", "FREE"],
    ];
    const keys = Object.keys(body);
    let last = -1;
    for (const [k, v] of order) {
      expect(body[k], k).toBe(v);
      expect(keys.indexOf(k), k).toBeGreaterThan(last);
      last = keys.indexOf(k);
    }
    expect(whatsapp).toBe(false);
  });

  test("a failed submission shows an error and no Purchase", async ({ page }) => {
    const events: string[] = [];
    await page.exposeFunction("recordFbq", (name: string) => events.push(name));
    await page.addInitScript(() => {
      const w = window as unknown as Record<string, (...a: unknown[]) => void>;
      w.fbq = (method, name) => {
        if (method === "track") w.recordFbq(name);
      };
    });
    await page.route(FORM_API, (route) => route.fulfill({ status: 500, json: { success: false } }));
    await page.goto("/car");
    await fillValidOrder(page);
    await page.getByTestId("order-submit").click();
    await expect(page.getByTestId("order-failed")).toBeVisible();
    expect(events).not.toContain("Purchase");
  });

  test("Purchase fires once per visit, after the order is saved, with the package price", async ({ page }) => {
    const events: [string, { value?: number; currency?: string }?][] = [];
    await page.exposeFunction("recordFbq", (name: string, data?: { value?: number; currency?: string }) => {
      events.push([name, data]);
    });
    // The pixel snippet leaves an existing window.fbq alone, so this stub receives every event.
    await page.addInitScript(() => {
      const w = window as unknown as Record<string, (...a: unknown[]) => void>;
      w.fbq = (method, name, data) => {
        if (method === "track") w.recordFbq(name, data);
      };
    });
    let posted = 0;
    await page.route(FORM_API, (route) => {
      posted += 1;
      return route.fulfill({ json: { success: true } });
    });
    await page.goto("/car");
    const purchases = () => events.filter(([name]) => name === "Purchase");

    await page.getByTestId("order-submit").click();
    await expect(page.getByText(/valid Nigerian number/i)).toBeVisible();
    expect(purchases()).toHaveLength(0);

    await fillValidOrder(page);
    await page.getByTestId("order-submit").click();
    await expect(page.getByTestId("order-done")).toBeVisible();
    await page.getByRole("button", { name: "Place another order" }).click();
    await fillValidOrder(page);
    await page.getByTestId("order-submit").click();
    await expect(page.getByTestId("order-done")).toBeVisible();

    expect(posted).toBe(2);
    expect(purchases()).toHaveLength(1);
    expect(purchases()[0][1]).toMatchObject({ value: 35000, currency: "NGN" });
    expect(events.filter(([name]) => name === "PageView")).toHaveLength(1);
    expect(events.filter(([name]) => name === "Lead")).toHaveLength(0);
  });

  test("hero shows the five-star badge and five faces above the headline", async ({ page }) => {
    await page.goto("/car");
    const badge = page.getByTestId("hero-rating");
    await expect(badge.getByLabel("5 out of 5 stars")).toBeVisible();
    await expect(badge.locator("img")).toHaveCount(5);
    const h1 = page.getByRole("heading", { level: 1 });
    expect((await badge.boundingBox())!.y).toBeLessThan((await h1.boundingBox())!.y);
  });

  test("no horizontal overflow at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/car");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});
