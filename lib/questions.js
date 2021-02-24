const inquirer = require("inquirer");

console.log('Please Build Your Team'),

    //Please Build your Team
    //Setting prompts to dry up code
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Employee's name?",
        default: "Employee Name",
        
    },
    {
        type: 'list',
        message: "What is your Employee's role?",
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"],
        default: "ex: Manager",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your Employee's ID?",
        default: "0",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your Employee's email?",
        validate:  function(email)
        {if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
            return true;
            }
            else {
            return "enter a valid email";
            }
        }
    },

    
    
        // {//manager's name
        //     type: 'input',
        //     message: 'What is your Managers name?',
        //     name: 'name',
        // },
        // {//manager ID
        //     type: 'input',
        //     message: 'What is your Managers ID?',
        //     name: 'id',
        // },
        {//Manager office number
            type: 'input',
            message: 'What is your Managers office number?',
            name: 'officeNumber',
        },
        // {//manager email force valid email
        //     type: 'input',
        //     message: 'What is your Managers email?',
        //     name: 'email',
        //     validate:  function(email)
        //     {// Regex mail check (return true if valid mail)
        //         if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
        //             return true;
        //         }
        //         else {
        //             return "enter a valid email";
        //         }
        //     }},
        //build team select engineer or intern
        // {type: 'list',
        // name: "role",
        // message:'add a team member',
        // choices: ['Engineer','Intern'],
        // },
            //Engineer name
        // {type: 'input',
        //     message: 'Engineer name?',
        //     name: 'name',
        // },
        // {//Engineer ID
        //     type: 'input',
        //     message: 'What is your Engineer ID?',
        //     name: 'id',
        // },
        {//Engineer Github UN
            type: 'input',
            message: 'What is Engineer GitHub user name?',
            name: 'github',
        },
        // {//Engineer email
        //     type: 'input',
        //     message: 'What is the Engineer email?',
        //     name: 'email',
        //     validate:  function(email)
        //     {// Regex mail check (return true if valid mail)
        //         if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
        //             return true;
        //         }
        //         else {
        //             return "enter a valid email";
        //         }
        //     }}, 
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
            // { //Intern email
            //     type: 'input',
            //     message: 'What is the Intern email?',
            //     name: 'email',
            //     validate:  function(email)
            //     {// Regex mail check (return true if valid mail)
            //         if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){
            //             return true;
            //         }
            //         else {
            //             return "enter a valid email";
            //         }
                // }},   
                 //I don't want to add any more team members
                {type: 'confirm',
                name: "add",
                message:'Do you want to add another team member',
                },
            ];
           module.exports = questions;