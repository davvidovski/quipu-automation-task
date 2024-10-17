class LoginPage {
    get emailField() { return $('#email'); }
    get passwordField() { return $('#passwd'); }
    get loginButton() { return $('#SubmitLogin'); }
    get accountName() { return $('.account span'); }  
    get errorMessage() { return $('div.alert.alert-danger'); }
    get loginPageLoaded() { return this.emailField.isDisplayed(); }

    async openLoginPage() {
        console.log('Opening login page...');
        await browser.url('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    // Login method with validation for email and password
    async login(email, password) {
        // Clear and add email value only if it's provided
        if (email && typeof email === 'string') {
            await this.emailField.clearValue();
            await this.emailField.addValue(email);
        } else {
            console.error('Invalid email:', email);
        }

        // Clear and add password value only if it's provided
        if (password && typeof password === 'string') {
            await this.passwordField.clearValue();
            await this.passwordField.addValue(password);
        } else {
            console.error('Invalid password:', password);
        }

        // Click the login button
        await this.loginButton.click();
    }

    // Get error message if it exists
    async getErrorMessage() {
        try {
            await this.errorMessage.waitForDisplayed({ timeout: 5000 });
            return await this.errorMessage.getText();
        } catch (error) {
            throw new Error('Error message not displayed');
        }
    }

    // Check if the user is on the account page
    async isOnAccountPage() {
        try {
            await this.accountName.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    // Get the account name after login
    async getAccountName() {
        try {
            await this.accountName.waitForDisplayed({ timeout: 5000 });
            return await this.accountName.getText();
        } catch (error) {
            throw new Error('Account name not displayed');
        }
    }
}

module.exports = new LoginPage();
