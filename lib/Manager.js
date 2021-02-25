// Define and export the Manager class. 
const Employee = require("./Employee");
class Manager {
    // officeNumber
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }
    // getRole() // Overridden to return 'Manager'
    getRole(){
        return "Manager";
    }
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

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;