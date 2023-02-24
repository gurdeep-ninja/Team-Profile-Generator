class Questions {

    // base questions
    // id,email

    // manager questions
    // office number

    // engineer question
    // Github username

    // intern question
    // school

    constructor(employeeType){
        this.employeeType = employeeType;
    }

    getManagerQuestions() {}

    getEngineerQuestions() {}

    getInternQuestions() {}

    getNameQuestion() {}

    getIdQuestion() {}

    getEmailQuestion() {}

    getOfficeQuestion(){}

    getGitHubQuestion(){}

    getSchoolQuestion(){}
}

        //     // name
        //     type: 'input',
        //     message: 'Enter name:',
        //     name: 'name'
        // },

// Export the Questions class as a module
module.exports = Questions;