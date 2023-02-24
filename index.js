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

const employees = [];

function createTeam() {

    const teamQuestion = new Questions();

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(teamQuestion.getTeamQuestions())

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {

            const choice = response.choices;
            // "Engineer"
            // "Intern"

            if (choice === 'Engineer') {
                const engineerQuestions = new Questions('engineer');

                inquirer
                    // The prompt is taking an array of objects which has all the questions
                    .prompt(engineerQuestions.getEmployeeQuestions())

                    // When the user finishes answering the questions, proceed with the response data returned 
                    .then((response) => {
                        // Create a new Engineer object based on the Engineer class
                        const engineer = new Engineer(response.name, response.id, response.email, response.github);

                        // Push the Engineer to the employees array
                        employees.push(engineer);

                        // Show the next prompt for adding additional employees
                        createTeam();
                    }
                    );
            } else if (choice === 'Intern') {
                const internQuestions = new Questions('intern');

                inquirer
                    // The prompt is taking an array of objects which has all the questions
                    .prompt(internQuestions.getEmployeeQuestions())

                    // When the user finishes answering the questions, proceed with the response data returned 
                    .then((response) => {
                        // Create a new Intern object based on the Intern class
                        const intern = new Intern(response.name, response.id, response.email, response.school);

                        // Push the Intern to the employees array
                        employees.push(intern);

                        // Show the next prompt for adding additional employees
                        createTeam();
                    }
                    );
            } else {

                const html = render(employees);
                //console.log(html);
                writeToFile(outputPath,html);
            }
        }
        );
}

// function to write html file
function writeToFile(file, data) {

    // Ise the writeFile() method of the fs module to write the file with data
    fs.writeFile(file, data, (error) =>

        // Upon the call back (success or failure), display the result to the user
        // An error is displayed if theres an issue
        // If successful, the file name is displayed to the user
        error ? console.error(error) : console.log(`${file} created successfully!`)
    )
}

function init() {

    const managerQuestions = new Questions('manager');

    inquirer
        // The prompt is taking an array of objects which has all the questions
        .prompt(managerQuestions.getEmployeeQuestions())

        // When the user finishes answering the questions, proceed with the response data returned 
        .then((response) => {
            // Create a new manager object based on the Manager class
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

            // Push the manager to the employees array
            employees.push(manager);

            // Show the next prompt for adding additional employees
            createTeam();
        }
        );
}

init()