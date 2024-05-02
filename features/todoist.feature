Feature: The Todoist Website

    Scenario Outline:As a user,I can login into the page

        Given I am on the landing page    
        When I am login with valid email and password
        Then I should navigate to home page
        And click on the profile drop down button
        Then click on the logout button

    Scenario Outline:As a user,I can add the task

        Then I should navigate to home page
        And click on the home button
        Then I can add a task
        Then I can see the task name
        And I complete the task 
        And click on the profile drop down button
        Then click on the logout button