const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require('./lib/questions');
const employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
function createTeam(){
    
    return inquirer.prompt(questions).then((responseObj) => {
        let teamData = responseObj;
        let teamMember = "";
        if (teamData.role === "Manager"){
            teamMember = new Manager (
                teamData.name,
                teamData.id,
                teamData.email,
                teamData.officeNumber,
            );
        }else if (teamData.role === "Engineer"){
            teamMember = new Engineer (
                teamData.name,
                teamData.id,
                teamData.email,
                teamData.github,
            );
        }else if (teamData.role === "Intern"){
            teamMember = new Intern (
                teamData.name,
                teamData.id,
                teamData.email,
                teamData.school,
            );
        };
        employees.push(teamMember);

        if (responseObj.addAnother){
            createTeam()
        } else {
            console.log(employees);
            function createHTML(){
                
                const pageHTML = render(employees);
                fs.writeFile(outputPath, pageHTML, (err) => err ? console.log(err) : console.log("Created Team!"))
            };
            createHTML();
        }
        
    });
   
};

createTeam (); 




//generate html file in output
//style the page

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
