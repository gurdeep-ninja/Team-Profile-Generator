const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Questions = require("./lib/Questions")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


function createTeam(employees){

    const teamQuestion = new Questions();

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(teamQuestion.getTeamQuestions())

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {
            console.log(response)
        }
        );


}

function init() {

    const employees = [];

    const managerQuestions = new Questions('manager');

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(managerQuestions.getEmployeeQuestions())

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {
            // Create a new manager object based on the Manager class
            const manager = new Manager(response.name, response.id, response.email,response.officeNumber);

            // Push the manager to the employees array
            employees.push(manager);

            // Show the next prompt for adding additional employees
            createTeam(employees);
        }
        );
}

init()