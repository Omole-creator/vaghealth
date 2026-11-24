import { test, expect } from "@playwright/test";

test.describe("/car (DUSKWAY visor)", () => {
  test("headline, videos, offer and form are visible", async ({ page }) => {
    await page.goto("/car");
    await expect(page.getByRole("heading", { level: 1, name: /three seconds after oncoming full light/i })).toBeVisible();
    await expect(page.locator("header video")).toHaveCount(2);
    await expect(page.getByTestId("pick-2")).toBeVisible();
    await expect(page.getByTestId("order-form")).toBeVisible();
  });

  test("the hero never shows a price", async ({ page }) => {
    await page.goto("/car");
    await expect(page.locator("header").first()).not.toContainText("₦");
  });

  test("placeholder reviews and the old number never reach buyers", async ({ page }) => {
    await page.goto("/car");
    await expect(page.locator("main")).not.toContainText("PLACEHOLDER");
    expect(await page.content()).not.toContain("9048744395");
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

    await page.getByTestId("pick-3").click();
    await expect(page.getByTestId("order-total")).toHaveText("₦35,000");

    await page.locator("#name").fill("Chinedu Okafor");
    await page.locator("#whatsapp").fill("0803 123 4567");
    await page.locator("#email").fill("chinedu@example.com");
    await page.locator("#address").fill("12 Allen Avenue, Ikeja");
    await page.locator("#state").selectOption("Lagos");
    await page.locator("#confirm").check();
    await page.getByTestId("order-submit").click();

    await expect.poll(() => sentUrl).toContain("wa.me/2349052745033");
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

  test("no horizontal overflow at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/car");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});
