// Define and export the Employee class 
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

class Employee {
// name
// id
// email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        // this.role = role;
    }
    // getName()
    getName(){
        return this.name;
    }
    // getId()
    getId(){
        return this.id;
    }
    // getEmail()
    getEmail(){
        return this.email;
    }

    // getRole() // Returns 'Employee'
    getRole(){
        return "Employee";
    };
    
}
// const Bob = new Employee("Bob", 23, "bob@gmail.com");
// console.log(Bob);

module.exports = Employee;




