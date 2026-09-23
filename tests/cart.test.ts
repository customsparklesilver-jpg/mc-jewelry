import {test, expect} from '@playwright/test';
import {formatPrice, normalizePrice} from './utils';

test.describe.skip('Cart', () => {
test('From home to checkout flow', async ({page}) => {
// Home => Collections => First collection => First product
await page.goto('/');
await page.goto('/collections');
await page.locator('[data-test=collection-grid] a').nth(0).click();
await page.locator('[data-test=product-grid] a').nth(0).click();

const firstItemPrice = normalizePrice(
await page.locator('[data-test=price]').textContent(),
);

await page.locator('[data-test=add-to-cart]').click();
await expect(
page.locator('[data-test=subtotal]'),
).toContainText(firstItemPrice);
});
});

