// Require/import the 'Employee' module
const Employee = require("./Employee");

// Engineer class Extend the Employee parent class
class Engineer extends Employee {


    // Override parent constructor as we are adding another property called officeNumber
    constructor(name, id, email, github) {

        // Call super method to invoke the Employee class constructor method
        super(name, id, email);

        // Office number property
        this.github = github;

    }

    // Method to return the Engineer GitHub username
    getGithub(){
        return this.github;
    }

    // Override the Employee getRole() method
    getRole() {
        // Override Employee role
        this.role = "Engineer";

        // Return the role
        return this.role;
    }

}

// Export the Engineer class as a module
module.exports = Engineer;