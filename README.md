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

 ## Mochawesome Report:
 
![Screenshot (46)](https://user-images.githubusercontent.com/123433625/228039868-767c8209-279e-4078-910f-c4ec993b51ed.png)


## Video Output:



https://user-images.githubusercontent.com/123433625/228039972-764fe3e5-e7d3-4877-b430-7859607bf2a6.mp4


