const { expect } = require('@playwright/test');
class ProductsPage {
    constructor(page) {
        this.men_icon = page.locator('//a[normalize-space()="Men"]');
        this.jeans_link = page.locator('xpath=//a[normalize-space()="Jeans"]');
        this.mens_jeans_text = page.locator('xpath=//h2[normalize-space()="Men - Jeans Products"]')
    }
    
    async gotoMensJeansProductPage() {
        await this.men_icon.click();
        await this.jeans_link.click();
        await expect(this.mens_jeans_text).toBeVisible();
    }
}

module.exports = ProductsPage;