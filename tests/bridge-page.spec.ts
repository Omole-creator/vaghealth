import { test, expect } from "@playwright/test";

test.describe("bridge/advertorial page", () => {
  test("reads as an article, not a sales page", async ({ page }) => {
    await page.goto("/why-it-keeps-coming-back");

    await expect(
      page.getByRole("heading", { name: /what actually causes vaginal odour/i })
    ).toBeVisible();

    // no purchase-intent or checkout language anywhere on the page
    const bodyText = (await page.locator("body").innerText()).toLowerCase();
    expect(bodyText).not.toContain("₦5,000");
    expect(bodyText).not.toContain("selar");
    expect(bodyText).not.toContain("guarantee");

    // exactly one CTA, and it points at the sales page, not checkout directly
    const links = page.getByRole("link", { name: /read the full breakdown/i });
    await expect(links).toHaveCount(1);
    await expect(links).toHaveAttribute("href", "/");
  });
});
