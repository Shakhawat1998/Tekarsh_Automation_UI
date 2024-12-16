const { expect } = require('@playwright/test');

class AccountCreatedPage {
    constructor(page) {
        this.product_icon = page.locator('xpath=//a[@href="/products"]');
        this.category_text = page.locator('xpath=//h2[normalize-space()="Category"]');
    }
    
    async gotoProductPage() {
        await this.product_icon.click();
        await expect(this.category_text).toBeVisible();
    }
}

module.exports = AccountCreatedPage;