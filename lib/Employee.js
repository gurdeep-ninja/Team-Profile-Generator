// Define class Employee
class Employee {

    // Class property - Employee role
    role = "Employee";

    // Constructor method to set initial values of properties when object is instantiated
    constructor(name, id, email){

        // Employee name
        this.name = name;

        // Employee id
        this.id = id;

        // Employee email
        this.email = email;
    }

    // Method to return the Employee name
    getName(){
        return this.name;
    }
    
    // Method to return the Employee id
    getId(){
        return this.id;
    }
    
    // Method to return the Employee email
    getEmail(){
        return this.email;
    }
    
    // Method to return the Employee role
    getRole(){
        return this.role;
    }
}

// Export the Employee class as a module
module.exports = Employee;