class Questions {

    constructor(employeeType) {
        this.employeeType = employeeType;
    }

    getQuestions() {

        const listOfQuestions = [];
        const type = this.employeeType;
        listOfQuestions.push(this.getNameQuestion());
        listOfQuestions.push(this.getIdQuestion());
        listOfQuestions.push(this.getEmailQuestion());

        if(this.employeeType === 'manager'){
            listOfQuestions.push(this.getOfficeNumber());
        }
        
        return listOfQuestions;
    }


    // Creates the name question based on if the employee is a manger,intern or engineer
    getNameQuestion() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};

        // Variable to set the question text based on employee type
        let questionText = "";

        // set inquirer question type
        question.type = 'input';        

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

        // set inquirer message text to display to the user
        question.message = questionText;
        //set the inquirer field name
        question.name = 'name'

        //return the question object
        return question;
    }

    // Creates the ID question
    getIdQuestion() {
        // Instantiate empty object to store question in format of inquirer.
        const question = {};
        // set inquirer question type
        question.type = 'input';

        // set inquirer message text to display to the user        
        question.message = "Enter ID:";
        //set the inquirer field name   

        question.name = 'id'
        //return the question object

        return question;
    }

    getEmailQuestion() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};
        // set inquirer question type
        question.type = 'input';

        // set inquirer message text to display to the user        
        question.message = "Enter email address:";
        //set the inquirer field name   

        question.name = 'email'
        //return the question object

        return question;
    }

    getOfficeNumber() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};
        // set inquirer question type
        question.type = 'input';

        // set inquirer message text to display to the user        
        question.message = "Enter office number:";
        //set the inquirer field name   

        question.name = 'officeNumber'
        //return the question object

        return question;
    }

    getGitHubQuestion() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};
        // set inquirer question type
        question.type = 'input';

        // set inquirer message text to display to the user        
        question.message = "Enter Github username:";
        //set the inquirer field name   

        question.name = 'github'
        //return the question object

        return question;
    }

    getSchoolQuestion() {

        // Instantiate empty object to store question in format of inquirer.
        const question = {};
        // set inquirer question type
        question.type = 'input';

        // set inquirer message text to display to the user        
        question.message = "Enter School:";
        //set the inquirer field name   

        question.name = 'school'
        //return the question object

        return question;
    }
}

//     // name
//     type: 'input',
//     message: 'Enter name:',
//     name: 'name'
// },

// Export the Questions class as a module
module.exports = Questions;