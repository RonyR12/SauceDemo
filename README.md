# SauceDemo Automation Test Project

This project contains automated test scripts built for the [SauceDemo](https://www.saucedemo.com/) website. The tests are written in JavaScript using WebDriverIO with the Mocha test framework.

#Overview

There are three separate test scenarios in this project, each one designed to run on a different browser:

- Q1 runs on Chrome
- Q2 runs on Firefox
- Q3 runs on Microsoft Edge

This setup helps ensure that key user flows work consistently across major browsers.

---

#Test Scenarios

Q1: 
Log in using the `locked_out_user` account. The test checks whether the correct error message appears when login is attempted.

Q2: 
Log in using the `standard_user` account. From the hamburger menu, reset the app state. Add any three products to the cart. Proceed through the checkout flow and confirm the product names and total price. Complete the order, verify the success message, reset the app state again, and log out.

Q3:
Log in using the `performance_glitch_user` account. Reset the app state, then apply the "Name (Z to A)" sorting filter. Add the first product in the list to the cart. Go through checkout, verify product names and the total price, complete the order, confirm the success message, reset the app state, and log out.

---

#Tools & Frameworks

- ebDriverIO – browser automation
- Mocha – test runner
- JavaScript – scripting language
- wdio.conf.js – custom configuration for running tests across multiple browsers




