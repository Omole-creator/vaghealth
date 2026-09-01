import { test, expect } from "@playwright/test";

test.describe("conversion essentials", () => {
  test("headline, offer, and guarantee are visible", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /vaginal odour keeps coming back/i })
    ).toBeVisible();

    await expect(page.getByTestId("offer-box").first()).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /you can't lose.*guarantee/i })
    ).toBeVisible();
  });

  test("every CTA button is present, enabled, and points at the checkout target", async ({
    page,
  }) => {
    await page.goto("/");

    const ctas = page.getByTestId("cta-button");
    const count = await ctas.count();
    expect(count).toBeGreaterThanOrEqual(4);

    for (let i = 0; i < count; i++) {
      const cta = ctas.nth(i);
      await expect(cta).toBeEnabled();
      const href = await cta.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).toMatch(/^(#offer|https:\/\/selar\.com\/)/);
    }
  });

  test("offer box never causes horizontal overflow at 375px", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const offerBox = page.getByTestId("offer-box").first();
    await offerBox.scrollIntoViewIfNeeded();
    const box = await offerBox.boundingBox();

    expect(box).not.toBeNull();
    if (box) {
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(375);
    }

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalOverflow).toBe(false);
  });
});
