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


// TODO: Write Code to gather information about the development team members, and render the HTML file.


function init() {

    const 

    const managerQuestions = new Questions('manager');

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(managerQuestions)

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email,response.officeNumber)
            console.log(manager)

        }
        );
}

init()