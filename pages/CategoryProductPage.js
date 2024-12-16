const { expect } = require('@playwright/test');
class CategoryProductsPage {
    constructor(page) {
        this.page = page;
        this.product1_viewProduct_button = page.locator('xpath=//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/a[1]');
        this.product1_quantity_text = page.locator('[id="quantity"]');
        this.addToCart_button = page.locator('xpath=//button[normalize-space()="Add to cart"]');
        this.added_text = page.locator('xpath=//p[normalize-space()="Your product has been added to cart."]')
        this.continue_shopping_button = page.locator('xpath=//button[normalize-space()="Continue Shopping"]')
    }
    async addToCart() {
        await this.product1_viewProduct_button.click();
        await this.product1_quantity_text.fill("2");
        await this.addToCart_button.click();
        await expect(this.added_text).toBeVisible();
        await this.continue_shopping_button.click();

    }

}

module.exports = CategoryProductsPage;