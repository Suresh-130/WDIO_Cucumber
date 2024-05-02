const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const data = require('../../data/todoist.json')
const SecurePage = require('../pageobjects/secure.page');
const LoginPage = require('../pageobjects/todoistLogin.page')
const AddTaskPage = require('../pageobjects/todoistAddTask.page')
require("dotenv").config();

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the landing page$/, async () => {
    await LoginPage.open();
});

When(/^I am login with valid email and password$/, async () => {
    await LoginPage.login(process.env.todoist_email, process.env.todoist_password);
});

Then(/^I should navigate to home page$/, async () => {
    await expect(LoginPage.user_logo).toBeDisplayed();
    await expect(LoginPage.user_text).toHaveText("Suresh");
});

Then(/^click on the profile drop down button$/, async () => {
    await (await LoginPage.drop_down).waitForClickable();
    await LoginPage.drop_down.click();
    await expect(LoginPage.drop_downmenu).toBeDisplayed();
    await LoginPage.logout_button.waitForDisplayed();
    await LoginPage.logout_button.click();
});

Then(/^click on the logout button$/, async () => {
  
    await expect(LoginPage.login_text).toBeDisplayed();
});

Then(/^click on the home button$/, async () => {
    await AddTaskPage.home_button.click();
});

Then(/^I can add a task$/, async () => {
    await AddTaskPage.addingTask(data.taskname, data.taskdescription);
});

Then(/^I can see the task name$/, async () => {
    await expect(AddTaskPage.verify_taskname).toBeDisplayed();
    await expect(AddTaskPage.verify_taskname).toHaveText(data.taskname);
});

Then(/^I complete the task$/, async () => {
    (await AddTaskPage.complete_thetask).click();
    await expect(AddTaskPage.verify_taskname).not.toHaveText(data.taskname);
});


