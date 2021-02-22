// define and export the Employee class with the following properties and methods:
class Employee {
// name
// id
// email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName()
    getName(){
        console.log(`${this.name}`);
    }
    // getId()
    getId(){
        console.log(`${this.id}`);
    }
    // getEmail()
    getEmail(){
        console.log(`${this.email}`);
    }

    // getRole() // Returns 'Employee'
    getRole(){
        console.log(Employee);
    }
    
}
// const Bob = new Employee("Bob", 23, "bob@gmail.com");
// console.log(Bob);

module.exports = Employee;




