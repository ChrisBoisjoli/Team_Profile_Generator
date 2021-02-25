// Define and export the Intern class.  
const Employee = require("./Employee");
class Intern {
   // school
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    // getRole() // Overridden to return 'Intern'
    getRole(){
        return "Intern";
    }
// getSchool()
        getSchool(){
        return this.school;
    }
}

module.exports = Intern;




