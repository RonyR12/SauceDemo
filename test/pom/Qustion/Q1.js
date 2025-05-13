const  page =require('../Utils/Base');
const Locator = require('../Utils/Locator')
class LoginPage extends page{
    get usernameInput() { return $(Locator.usernameInput); }
    get passwordInput() { return $(Locator.passwordInput); }
    get loginButton() { return $(Locator.loginButton); }
    get errorMessage() { return $(Locator.errorMessage); }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorText() {
        return await this.errorMessage.getText();
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
