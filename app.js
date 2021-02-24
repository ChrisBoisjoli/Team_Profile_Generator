const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//generate html file in output
//style the page



//Please Build your Team
console.log('Please Build Your Team'),

inquirer.prompt([
   
    
    {//manager's name
        type: 'input',
        message: 'What is your Managers name?',
        name: 'name',
    },
    {//manager ID
        type: 'input',
        message: 'What is your Managers ID?',
        name: 'id',
    },
    {//Manager office number
        type: 'input',
        message: 'What is your Managers office number?',
        name: 'officeNumber',
    },
    {//manager email force valid email
        type: 'input',
        message: 'What is your Managers email?',
        name: 'email',
        validate:  function(email)
        {// Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
                return true;
            }
            else {
                return "enter a valid email";
            }
        } //return message
        
    },
    //build team select engineer or intern
    {type: 'list',
    name: "role",
    message:'add a team member',
    choices: ['Engineer','Intern'],
    },
        //Engineer name
    {type: 'input',
        message: 'Engineer name?',
        name: 'name',
    },
    {//Engineer ID
        type: 'input',
        message: 'What is your Engineer ID?',
        name: 'id',
    },
    {//Engineer Github UN
        type: 'input',
        message: 'What is Engineer GitHub user name?',
        name: 'github',
    },
    {//Engineer email
        type: 'input',
        message: 'What is the Engineer email?',
        name: 'email',
        validate:  function(email)
        {// Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
                return true;
            }
            else {
                return "enter a valid email";
            }
        }}, //return message
      
        {// Intern Name
        type: 'input',
        message: 'Intern name?',
        name: 'name',
    },
    {//Intern ID
        type: 'input',
        message: 'What is your Intern ID?',
        name: 'id',
    },
    {//Intern School
        type: 'input',
        message: 'What is your school?',
        name: 'school',
    },
    { //Intern email
        type: 'input',
        message: 'What is the Intern email?',
        name: 'email',
        validate:  function(email)
        {// Regex mail check (return true if valid mail)
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
                return true;
            }
            else {
                return "enter a valid email";
            }
        }},       
        
        //I don't want to add any more team members
]).then((response) => console.log(response) );

// render();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
