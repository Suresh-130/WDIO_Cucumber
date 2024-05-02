const Page = require("./page");
const { $ } = require("@wdio/globals")
class LoginPage extends Page{

    locators = {
        logintext : "(//div/h1)[2]",
        loginbutton : "(//a[text()='Log in'])[1]",
        emailInput : "//input[@type='email']",
        passwordInput : "//input[@type='password']",
        submitbutton : "//button[@type='submit']",
        userlogo : "//img[@alt='Suresh']",
        usertext : "(//button//span)[3]",
        logoutbutton : "//button/span[text()='Log out']",
        //logoutbutton : "(//div[@role='button'])[4]",
        dropdown : "//button[@aria-label='Settings']",
        dropdownmenu : "//div[@aria-label='Settings menu']",
    }

    get login_text(){
        return $(this.locators.logintext);
    }

    get clickOnLogin(){
        return $(this.locators.loginbutton);
    }

    get email_input(){
        return $(this.locators.emailInput);
    }

    get password_input(){
        return $(this.locators.passwordInput);
    }

    get submit_input(){
        return $(this.locators.submitbutton);
    }

    get user_logo(){
        return $(this.locators.userlogo);
    }

    get user_text(){
        return $(this.locators.usertext);
    }

    get logout_button(){
        return $(this.locators.logoutbutton);
    }

    get drop_down(){
        return $(this.locators.dropdown);
    }

    get drop_downmenu(){
        return $(this.locators.dropdownmenu)
    }

    async login(email,password){
        (await this.clickOnLogin).waitForDisplayed();
        await this.clickOnLogin.click();
        await expect(this.login_text).toBeDisplayed();
        await this.email_input.setValue(email);
        await this.password_input.click();       
        await this.password_input.setValue(password);
        await this.submit_input.click();
    }

    // async logout(){
    //     await this.user_text.click();
    //     await this.logout_button.click();

    // }

    open(){
        return super.open();
    } 
}

module.exports = new LoginPage();