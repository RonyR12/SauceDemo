
const QuestionThree = require('../test/pom/Qustion/Q3');
describe('Q3 Test', () => {
    it('Login with performance_glitch_user and reset the App State.', async () => {
        await QuestionThree.open();
        await QuestionThree.login('performance_glitch_user', 'secret_sauce');
        await QuestionThree.resetAppState();

    });
    it('Then filter by name (Z to A) and select the first product into the cart', async () => {
        await QuestionThree.filterNameCart();

    });
    it('Then navigate up to the final checkout page and verify all the products names and the total price.', async () => {
        await QuestionThree.verifyAllProduct('Q3', 'Test', 123);
        await QuestionThree.NameVerify();
        await QuestionThree.totalPriceVerify();


    });
    it('Then finish the purchase journey and verify the successful order message', async () => {

        await QuestionThree.finisPurchase();
        await QuestionThree.succesMsgVerify();

    });
    it('Then, reset the App State again and log out', async () => {

        await QuestionThree.logout();

    });




});
