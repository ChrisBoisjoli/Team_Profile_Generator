// Define and export the Manager class. 

class Manager {
    // github // GitHub username
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    // getRole() // Overridden to return 'Manager'
    getRole(){
        return 'Manager';
    }
// officeNumber
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;