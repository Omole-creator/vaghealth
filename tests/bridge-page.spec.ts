import { test, expect } from "@playwright/test";

test.describe("bridge page (/care)", () => {
  test("shows the headline, the image, and both CTAs pointing at the sales page", async ({
    page,
  }) => {
    await page.goto("/care");

    await expect(
      page.getByRole("heading", { name: /the smell down there keeps coming back/i })
    ).toBeVisible();

    await expect(page.getByAltText(/resting her head/i)).toBeVisible();

    // no purchase-intent or checkout language anywhere on the page
    const bodyText = (await page.locator("body").innerText()).toLowerCase();
    expect(bodyText).not.toContain("₦5,000");
    expect(bodyText).not.toContain("selar");
    expect(bodyText).not.toContain("guarantee");

    // both CTAs are present and point at the sales page, not checkout directly
    const links = page.getByRole("link", { name: /get.*full details/i });
    await expect(links).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      await expect(links.nth(i)).toHaveAttribute("href", "/");
    }
  });
});
