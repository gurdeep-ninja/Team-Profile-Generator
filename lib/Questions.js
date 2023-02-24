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

    getNameQuestion() {

        //     // name
        //     type: 'input',
        //     message: 'Enter name:',
        //     name: 'name'
        // },

        const question = {};

        let questionText = "Blah blah";

        question.message = questionText;


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