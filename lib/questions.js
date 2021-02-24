const questions = [
    //Please Build your Team
    console.log('Please Build Your Team'),
    
    
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
            }},
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
            }}, 
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
                {type: 'confirm',
                name: "add",
                message:'Do you want to add another team member',
                },
            ];
           