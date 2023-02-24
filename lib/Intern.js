// Require/import the 'Employee' module
const Employee = require("./Employee");

// Engineer class Extend the Employee parent class
class Intern extends Employee {

    // Override parent constructor as we are adding another property called school
    constructor(name, id, email, school) {

        // Call super method to invoke the Employee class constructor method
        super(name, id, email);

        // Office number property
        this.school = school;
        
        // Override the inherited role
        this.getRole()

    }

    // Method to return the Manager office number
    getSchool(){
        return this.school;
    }

    // Override the Employee getRole() method
    getRole() {
        // Override Employee role
        this.role = "Intern";
    }
}

// Export the Intern class as a module
module.exports = Intern;