// Define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    // github // GitHub username
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}
// officeNumber

// getRole() // Overridden to return 'Manager'

module.exports = Manager;