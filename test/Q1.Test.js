const LoginPage = require('../test/pom/Qustion/Q1');

describe('Q1 Test', () => {
    it('login with locked_out _user and verify the error message', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        const error = await LoginPage.getErrorText();
        console.log(error);
    });
});
