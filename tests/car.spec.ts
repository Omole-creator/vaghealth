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

  test("invalid form does not open WhatsApp", async ({ page }) => {
    let opened = false;
    await page.route("https://wa.me/**", (route) => {
      opened = true;
      return route.fulfill({ body: "ok" });
    });
    await page.goto("/car");
    await page.getByTestId("order-submit").click();
    await expect(page.getByText(/valid Nigerian number/i)).toBeVisible();
    expect(opened).toBe(false);
  });

  test("valid form opens WhatsApp with every field, in order, spaced out", async ({ page }) => {
    let sentUrl = "";
    await page.route("https://wa.me/**", (route) => {
      sentUrl = route.request().url();
      return route.fulfill({ body: "ok" });
    });
    await page.goto("/car");

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
    await page.getByTestId("order-submit").click();

    await expect.poll(() => sentUrl).toContain("wa.me/2349048744395");
    const text = new URL(sentUrl).searchParams.get("text")!;
    const order = [
      "Package:* 3 Visors + 1 FREE (4 visors)",
      "Total:* ₦35,000",
      "Full name:* Chinedu Okafor",
      "WhatsApp number:* 0803 123 4567",
      "Email:* chinedu@example.com",
      "Delivery address:* 12 Allen Avenue, Ikeja",
      "State:* Lagos",
      "Best time to deliver:* Any time",
      "Payment:* Pay on delivery",
      "Delivery:* FREE",
    ];
    let last = -1;
    for (const part of order) {
      const at = text.indexOf(part);
      expect(at, part).toBeGreaterThan(last);
      last = at;
    }
    expect(text).toContain("\n\n");
  });

  test("Purchase fires once for a valid order, with the package price, and never for an invalid one", async ({ page }) => {
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
    let opened = 0;
    // 204 keeps the page in place, like returning from WhatsApp.
    await page.route("https://wa.me/**", (route) => {
      opened += 1;
      return route.fulfill({ status: 204 });
    });
    await page.goto("/car");
    const purchases = () => events.filter(([name]) => name === "Purchase");

    // Retried: in dev the first click can land before React has hydrated the button.
    await expect(async () => {
      await page.getByTestId("pick-3").click();
      await expect(page.getByTestId("order-total")).toHaveText("₦35,000", { timeout: 1000 });
    }).toPass();

    await page.getByTestId("order-submit").click();
    await expect(page.getByText(/valid Nigerian number/i)).toBeVisible();
    expect(purchases()).toHaveLength(0);

    await page.locator("#name").fill("Chinedu Okafor");
    await page.locator("#whatsapp").fill("0803 123 4567");
    await page.locator("#email").fill("chinedu@example.com");
    await page.locator("#address").fill("12 Allen Avenue, Ikeja");
    await page.locator("#state").selectOption("Lagos");
    await page.locator("#confirm").check();
    await page.getByTestId("order-submit").click();
    await expect.poll(() => opened).toBe(1);
    await page.getByTestId("order-submit").click();
    await expect.poll(() => opened).toBe(2);

    expect(purchases()).toHaveLength(1);
    expect(purchases()[0][1]).toMatchObject({ value: 35000, currency: "NGN" });
    expect(events.filter(([name]) => name === "PageView")).toHaveLength(1);
    expect(events.filter(([name]) => name === "Lead")).toHaveLength(0);
  });

  test("no horizontal overflow at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/car");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});
