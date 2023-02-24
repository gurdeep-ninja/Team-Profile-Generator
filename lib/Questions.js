class Questions {

    // base questions
    // id,email

    // manager questions
    // office number

    // engineer question
    // Github username

    // intern question
    // school

    constructor(employeeType) {
        this.employeeType = employeeType;
    }

    getManagerQuestions() { }

    getEngineerQuestions() { }

    getInternQuestions() { }

    // Creates the name question based on if the employee is a manger,intern or engineer
    getNameQuestion() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};

        // Variable to set the question text based on employee type
        let questionText = "";

        // Switch to check employee type)
        switch (this.employeeType) {
            // If they're a manager
            case 'manager':
                questionText = "Enter manager's name:";
                break;
            // If they're an engineer
            case 'engineer':
                questionText = "Enter engineer's name:";
                break;
            // If they're an intern
            case 'intern':
                questionText = "Enter intern's name:";
                break;
            // Default value
            default:
                questionText = "Enter name:";
        }

        // set inquirer question type
        question.type = 'input';
        // set inquirer message text to display to the user
        question.message = questionText;
        //set the inquirer field name
        question.name = 'name'
        
        //return the question object
        return question;
    }

    getIdQuestion() { }

    getEmailQuestion() { }

    getOfficeQuestion() { }

    getGitHubQuestion() { }

    getSchoolQuestion() { }
}

//     // name
//     type: 'input',
//     message: 'Enter name:',
//     name: 'name'
// },

// Export the Questions class as a module
module.exports = Questions;