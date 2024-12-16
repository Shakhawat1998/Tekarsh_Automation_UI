const { expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
class CartPage {
    constructor(page) {
        this.page = page;
        this.viewCart = page.locator('xpath=//a[normalize-space()="Cart"]');
        this.proceed_to_checkout_button = page.locator('//a[normalize-space()="Proceed To Checkout"]');
        this.place_order_button = page.locator('xpath=//a[@href="/payment"]');
        this.cardName_text = page.locator('[name="name_on_card"]');
        this.cardNumber_text = page.locator('[name="card_number"]');
        this.cvc_text = page.locator('[name="cvc"]');
        this.expiration_text = page.locator('[name="expiry_month"]');
        this.expiration1_text = page.locator('[name="expiry_year"]');
        this.pay_button = page.locator('xpath=//button[@data-qa="pay-button"]');
        this.confirmed_text = page.locator('xpath=//p[normalize-space()="Congratulations! Your order has been confirmed!"]');
        this.contact_link = page.locator('xpath=//a[@href="/contact_us"]');
        this.contactPage_text = page.locator('xpath=//p[normalize-space()="We really appreciate your response to our website."]');
    }
    async addToCart() {
        const card_number = faker.phone.number();
        const card_name = faker.person.firstName();
        const cvc = faker.phone.number();
        const month = "10";
        const year = "2010";
        await this.viewCart.click();
        await this.proceed_to_checkout_button.click();
        await this.place_order_button.click();
        await this.cardName_text.fill(card_name);
        await this.cardNumber_text.fill(card_number);
        await this.cvc_text.fill(cvc);
        await this.expiration_text.fill(month);
        await this.expiration1_text.fill(year);
        await this.pay_button.click();
        await expect(this.confirmed_text).toBeVisible();
    }

    async gotoContactPage() {
        await this.contact_link.click();
        await expect(this.contactPage_text).toBeVisible();
    }

}

module.exports = CartPage;