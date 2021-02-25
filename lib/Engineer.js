//  Define and export the Engineer class.  
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

// getRole() // Overridden to return 'Engineer'
    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;