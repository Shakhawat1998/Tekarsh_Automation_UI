const { expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';




class ContactPage {
    constructor(page) {
        this.name_text = page.locator('[name="name"]');
        this.email_text = page.locator('[name="email"]');
        this.subject_text = page.locator('[name="subject"]');
        this.message_text = page.locator('[id="message"]');
        this.submit_button = page.locator('xpath=//input[@name="submit"]')
        this.file_upload_button = page.locator('xpath=//input[@name="upload_file"]')
        this.submitConfirmed_text = page.locator('xpath=//div[@class="status alert alert-success"]')
    }

    async submitContactUs() {
        await this.name_text.fill(faker.person.firstName());
        await this.email_text.fill(faker.internet.email());
        await this.subject_text.fill(faker.commerce.productName());
        await this.message_text.fill(faker.commerce.productDescription());
        const fileName = './assets/picture.jpg';
        await this.file_upload_button.setInputFiles(fileName);
        await this.submit_button.click();
        // await expect(this.submitConfirmed_text).toBeVisible();
    }
}

module.exports = ContactPage;