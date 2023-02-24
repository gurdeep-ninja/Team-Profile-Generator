// Require/import the 'Employee' module
const Employee = require("./Employee");

// Engineer class Extend the Employee parent class
class Manager extends Employee {

    // Override parent constructor as we are adding another property called officeNumber
    constructor(name, id, email, officeNumber) {

        // Call super method to invoke the Employee class constructor method
        super(name, id, email);

        // Office number property
        this.officeNumber = officeNumber;

    }

    // Method to return the Manager office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the Employee getRole() method
    getRole() {
        // Override Employee role
        this.role = "Manager";
    }
}

// Export the Manager class as a module
module.exports = Manager;