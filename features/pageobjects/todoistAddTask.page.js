const Page = require("./page");
const { $ } = require("@wdio/globals")
class AddTaskPage extends Page{
    
    locators = {
        homebutton : "(//div[@role='button'])[3]",
        addtask : "(//button[text()='Add task'])[2]",
        taskname : "(//div[@role='textbox'])[1]",
        taskdescription : "(//div[@role='textbox'])[2]",
        savetask : "//button[@aria-label='Add task']",
        verifytaskname : "(//div[@data-index='2']//div)[10]",
        completethetask : "(//button[@role='checkbox'])[3]",
    }

    get home_button(){
        return $(this.locators.homebutton);
    }

    get add_task(){
        return $(this.locators.addtask)
    }

    get task_name(){
        return $(this.locators.taskname);
    }

    get task_description(){
        return $(this.locators.taskdescription);
    }

    get save_task(){
        return $(this.locators.savetask);
    }

    get verify_taskname(){
        return $(this.locators.verifytaskname)
    }

    get complete_thetask(){
        return $(this.locators.completethetask)
    }

    async addingTask(taskname1, taskdescription1){
        (await this.add_task).click(); 
        (await this.task_description).click();
        (await this.task_description).setValue(taskdescription1);
        await this.task_name.click();
        await this.task_name.setValue(taskname1);
        (await this.save_task).click();
      //  await browser.setTimeout({ 'script': 60000 }) 
    }

}

module.exports = new AddTaskPage();