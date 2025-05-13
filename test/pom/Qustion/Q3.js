const page = require('../Utils/Base');
const Locator = require('../Utils/Locator')
class QuestionThree extends page {
    get usernameInput() { return $(Locator.usernameInput); }
    get passwordInput() { return $(Locator.passwordInput); }
    get loginButton() { return $(Locator.loginButton); }
    get errorMessage() { return $(Locator.errorMessage); }
    get humburger() { return $(Locator.humburgerMenu); }
    get resetAppSta() { return $(Locator.resetAppState); }
    get crossBuger() { return $(Locator.crossBurger); }
    get bagPack() { return $(Locator.addCartBag); }
    get bikeLight() { return $(Locator.bikeLight); }
    get tShirt() { return $(Locator.boltTshirt); }
    get cartBtn() { return $(Locator.cartBtn); }
    get checkoutBtn() { return $(Locator.checkOut); }
    get firstName() { return $(Locator.firstName); }
    get Lastname() { return $(Locator.lastName); }
    get postalCode() { return $(Locator.postalCode); }
    get continue() { return $(Locator.continueBtn); }
    get nameVerify() { return $(Locator.nameVerify); }
    get totalPrice() { return $(Locator.totalPrice); }
    get finishBtn() { return $(Locator.finishBtn); }
    get successMsg() { return $(Locator.successOrderMsg); }
    get logOutBtn() { return $(Locator.logOut); }
    get ProductSort() { return $(Locator.sortProduct); }
    get firstProduct() { return $(Locator.firstProduct); }







    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await browser.pause(500);


    }


    async resetAppState() {
        await this.humburger.click();
        await this.resetAppSta.click();
        await browser.pause(1000);
        await this.crossBuger.click();
        await browser.pause(1000);



    }

    async filterNameCart() {
        await this.ProductSort.selectByVisibleText('Name (Z to A)');
        await browser.pause(500);
        await this.firstProduct.click();
        await browser.pause(500);

        await this.cartBtn.click();


    }


    async verifyAllProduct(firstname, lastname, postalcode) {
        await this.checkoutBtn.click();
        await this.firstName.setValue(firstname);
        await this.Lastname.setValue(lastname);
        await this.postalCode.setValue(postalcode);
        await browser.pause(1000);
        await this.continue.click();
    }

    async NameVerify() {
        return await this.nameVerify.getText();


    }
    async totalPriceVerify() {
        await browser.pause(500);
        return await this.totalPrice.getText();


    }

    async finisPurchase() {
        await this.finishBtn.click();

    }
    async succesMsgVerify() {
        await browser.pause(500);
        return await this.successMsg.getText();


    }

    async logout() {
        await this.humburger.click();
        await this.resetAppSta.click();
        await browser.pause(500);
        await this.logOutBtn.click();

    }


    open() {
        return super.open('');
    }
}

module.exports = new QuestionThree();
