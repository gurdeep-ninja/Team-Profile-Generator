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

    // Override the Employee getRole() method
    getRole() {
        // Override Employee role
        this.role = "Manager";

        // Return the role
        return this.role;
    }
}

const myMan = new Manager("Gurdeep", 5, 'blah@gmail.com', 5);

console.log(myMan.getRole())