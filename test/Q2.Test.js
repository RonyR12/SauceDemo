
const QuestionTwo = require('../test/pom/Qustion/Q2');
describe('Q2 Test', () => {
    it('Log in with standard_user.', async () => {
        await QuestionTwo.open();
        await QuestionTwo.login('standard_user', 'secret_sauce');  
    });
    it('From the hamburger menu, reset the App State', async () => {
        await QuestionTwo.resetAppState();
    });
    it('Add any three items to the cart', async () => {
        await QuestionTwo.addToCart();
    });
    it(' Navigate to the final checkout page and verify the product name and total price', async () => {
        await QuestionTwo.cartCheckout('Q2', 'Test', 123);
        await QuestionTwo.NameVerify();
        await QuestionTwo.totalPriceVerify();
    });
    it('Finish the purchase journey and verify the successful order message', async () => {
        await QuestionTwo.finisPurchase();
        await QuestionTwo.succesMsgVerify();
    });
    it('Then, reset the App State again and log out', async () => {
        await QuestionTwo.logout();
    });


});
