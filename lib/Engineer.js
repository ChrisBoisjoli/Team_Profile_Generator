//  Define and export the Engineer class.  
const Employee = require("./Employee");
class Engineer {
    // github // GitHub username
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

// getGithub()
    getGithub(){
        return this.github;
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

// getRole() // Overridden to return 'Engineer'
    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;