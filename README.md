# Tekarsh UI Automation

**This project focuses on automating key user workflows on the **Automation Exercise** platform to ensure the application functions as expected across critical scenarios. The goal is to validate user registration, product selection, order placement, and contact form submission through end-to-end UI testing.**


## Technology Used:

- Playwright
- Java Script
- Visual Studio Code

## How to run this project:

- Clone this project
- First install dependencies:
 ```npm install```
 
- Then run the test:
 ```npx playwright test```

## Test Scenarios

### Steps to Automate

1. **Visit the Login Page**
   - Open the URL: [https://automationexercise.com/login](https://automationexercise.com/login).

2. **Complete the Sign-Up Process**
   - Fill out all **required fields**.
   - Fill out **non-required fields**, including **Date of Birth**.

3. **Select Product Category**
   - Navigate to the **Men** category.
   - Select **Jeans**.

4. **View and Update Product**
   - Click **View Product** for any product.
   - Change the product quantity to **2**.
   - Add the product to the **cart**.

5. **Proceed to Checkout**
   - Navigate to the cart and click **Proceed to Checkout**.
   - Add **dummy payment details**.
   - Confirm placing the order.

6. **Contact Us Form Submission**
   - Navigate to the **Contact Us** page.
   - Fill in all the required fields:
     - **Name**
     - **Email**
     - **Subject**
   - Attach a file (any type).
   - Verify the form submission.

 ## Playright Report:

![image](https://github.com/user-attachments/assets/6f533eef-0464-473f-b42c-88e0300943d9)






## Video Output:

https://github.com/user-attachments/assets/4799c7fc-57b2-47b8-8bfb-77d0bef630c0








