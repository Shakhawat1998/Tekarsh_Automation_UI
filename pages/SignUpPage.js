const { expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

class SignUpPage {
    constructor(page) {
        this.page = page;
        this.gender_male_radio = page.locator('[id="id_gender1"]');
        this.name_textbox = page.locator('[id="name"]');
        this.password_textbox = page.locator('[id="password"]');
        this.date_of_birth_days = page.locator('[id="days"]');
        this.date_of_birth_months = page.locator('[id="months"]');
        this.date_of_birth_years = page.locator('[id="years"]');
        this.newsletter_radio = page.locator('[id="newsletter"]');
        this.special_offer_radio = page.locator('[id="optin"]');
        this.firstName_textbox = page.locator('[id="first_name"]');
        this.lastName_textbox = page.locator('[id="last_name"]');
        this.company_textbox = page.locator('[id="company"]');
        this.address1_textbox = page.locator('[id="address1"]');
        this.address2_textbox = page.locator('[name="address2"]');
        this.country = page.locator('[id="country"]');
        this.state_textbox = page.locator('[id="state"]')
        this.city_textbox = page.locator('[id="city"]');
        this.zipcode_textbox = page.locator('[id="zipcode"]');
        this.mobileNumber = page.locator('[id="mobile_number"]');
        this.submit_button = page.locator('xpath=//button[@data-qa="create-account"]');
        this.success_message_text = page.locator('xpath=//p[contains(text(),"successfully created")]');
    }

    async doCreateAcoount() {
        const name = faker.person.fullName();
        const password = "1234";
        const days = "13";
        const months = "5";
        const years = "2017";
        const first_name = faker.person.firstName();
        const last_name = faker.person.lastName();
        const company = "Tekarsh";
        const address1 = faker.person.jobArea();
        const address2 = faker.person.jobArea();
        const country = "Australia";
        const state = faker.person.jobArea();
        const city = faker.person.jobArea();
        const zipcode = "1234";
        const mobileNumber = "01" + Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join("");
        await this.gender_male_radio.click();
        await this.name_textbox.fill(name);
        await this.password_textbox.fill(password);
        await this.date_of_birth_days.selectOption(days);
        await this.date_of_birth_months.selectOption(months);
        await this.date_of_birth_years.selectOption(years);
        await this.newsletter_radio.click();
        await this.special_offer_radio.click();
        await this.firstName_textbox.fill(first_name);
        await this.lastName_textbox.fill(last_name);
        await this.company_textbox.fill(company);
        await this.address1_textbox.fill(address1);
        await this.address2_textbox.fill(address2);
        await this.country.selectOption(country);
        await this.state_textbox.fill(state);
        await this.city_textbox.fill(city);
        await this.zipcode_textbox.fill(zipcode);
        await this.mobileNumber.fill(mobileNumber);
        await this.submit_button.click();
    }

    async validateSignup() {
        await expect(this.success_message_text).toBeVisible();
    }
}

module.exports = SignUpPage;