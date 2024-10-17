class HomePage {
    get loginLink() { return $('a.login'); } // Selector for the login link

    // Method to open the homepage
    async openHomePage() {
        console.log('Opening homepage...');
        await browser.url('http://www.automationpractice.pl/index.php'); // Open the homepage
    }
    

    // Method to wait for the homepage to load completely (wait for login link to be displayed)
    async waitForHomePageToLoad() {
        console.log('Waiting for homepage to load...');
        await this.loginLink.waitForDisplayed({
            timeout: 10000, 
            timeoutMsg: 'Homepage did not load in 10 seconds',
        });
    }
}

module.exports = new HomePage();
