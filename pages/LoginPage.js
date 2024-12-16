const { expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
class LoginPage {
    constructor(page) {
        this.page = page;
        this.baseUrl = "https://automationexercise.com";
        this.name_textbox = page.locator('[name="name"]');
        this.email_textbox = page.locator('xpath=//input[@data-qa="signup-email"]');
        this.signup_button = page.locator('xpath=//button[@data-qa="signup-button"]');
        this.enter_acc_info_text = page.locator('xpath=//b[normalize-space()="Enter Account Information"]');
        this.login_text = page.locator('xpath=//h2[normalize-space()="Login to your account"]');
    }

    async gotoLoginPage() {
        await this.page.goto(`${this.baseUrl}/login`);
        await expect(this.login_text).toBeVisible();
    }

    async gotoSignUpPage() {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        await this.name_textbox.fill(name);
        await this.email_textbox.fill(email);
        await this.signup_button.click();
        await expect(this.enter_acc_info_text).toBeVisible();
    }
}

module.exports = LoginPage;