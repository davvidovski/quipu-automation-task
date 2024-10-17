const HomePage = require('../pageObjects/HomePage'); // Import HomePage POM
const LoginPage = require('../pageObjects/LoginPage'); // Import LoginPage POM
const loginData = require('../data/loginData.json'); // Load test data from JSON

describe('Login functionality', () => {
    // Reusable code for opening the homepage and login page
    beforeEach(async () => {
        console.log('Starting setup for test...');
        await HomePage.openHomePage();  // Open the homepage
        await LoginPage.openLoginPage(); // Open the login page
    });

    it('should show an error message with missing email', async () => {
        const { missingField, password } = loginData.invalidCredentials;

        // Step 2: Attempt login with missing email
        await LoginPage.login(missingField, password);

        // Step 3: Verify error message is displayed for missing email
        const errorMessage = await LoginPage.getErrorMessage();
        const normalizedErrorMessage = errorMessage.replace(/\n/g, ' '); // Normalize line breaks
        expect(normalizedErrorMessage).toContain('There is 1 error An email address required.');
    });

    it('should show an error message with missing password', async () => {
        const { email, missingField } = loginData.invalidCredentials;

        // Step 2: Attempt login with missing password
        await LoginPage.login(email, missingField);

        // Step 3: Verify error message is displayed for missing password
        const errorMessage = await LoginPage.getErrorMessage();
        const normalizedErrorMessage = errorMessage.replace(/\n/g, ' '); // Normalize line breaks
        expect(normalizedErrorMessage).toContain('There is 1 error Password is required.');
    });

    it('should show an error message with invalid credentials', async () => {
        const { email, password } = loginData.invalidCredentials;
    
        // Step 2: Attempt login with invalid credentials
        await LoginPage.login(email, password);
    
        // Step 3: Verify error message is displayed for invalid credentials
        const errorMessage = await LoginPage.getErrorMessage();
        const normalizedErrorMessage = errorMessage.replace(/\n/g, ' '); // Normalize line breaks
        expect(normalizedErrorMessage).toContain('There is 1 error Authentication failed.');
    });
    

    it('should show an error message with empty credentials', async () => {
        const { missingField } = loginData.invalidCredentials;

        // Step 2: Attempt login with empty credentials (both fields empty)
        await LoginPage.login(missingField, missingField);

        // Step 3: Verify error message is displayed for both fields
        const errorMessage = await LoginPage.getErrorMessage();
        const normalizedErrorMessage = errorMessage.replace(/\n/g, ' '); // Normalize line breaks
        expect(normalizedErrorMessage).toContain('There is 1 error An email address required.');
    });

    it('should log in successfully with valid credentials', async () => {
        const { email, password, accountName } = loginData.validCredentials;

        // Step 2: Perform the login with valid credentials
        await LoginPage.login(email, password);

        // Step 3: Wait for redirection to the "My Account" page
        await browser.waitUntil(async () => await LoginPage.isOnAccountPage(), {
            timeout: 5000,
            timeoutMsg: 'Did not land on the account page in time',
        });

        // Step 4: Verify account name is displayed after login
        const displayedAccountName = await LoginPage.getAccountName();
        expect(displayedAccountName).toEqual(accountName);
    });
});