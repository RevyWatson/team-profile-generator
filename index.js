// packages linked for this application
const inquirer = require("inquirer");
const fs = require("fs");
// team classes linked for this application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// html templates linked for html generation
const rendereredHTML = require("./src/renderedHTML");


const myTeam = [];
//calls to manager function and prompts manager questions
createManager()

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the manager's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the office number associated with this team?",
            name: "officeNumber",
        },
    ])

        .then(input => {
            const manager = new Manager(input.fullName, input.id, input.email, input.officeNumber);
            myTeam.push(manager);
            console.log("Huzzah! This team member's profile information was saved!");
            console.log(manager);
            addMember()
        })
}
// add member function prompts user to select from choices
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Select a job title to add a team member.",
            name: "jobTitle",
            choices: ["Engineer", "Intern", "Finished building my team."],
        },
    ])
        .then(input => {
            switch (input.jobTitle) {
                case "Engineer": createEngineer()

                    break;
                case "Intern": createIntern()

                    break;
                default: generateHTML()
            }
        })
}
//if user selects Engineer...
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
        },

    ])
        .then(input => {
            const engineer = new Engineer(input.fullName, input.id, input.email, input.github);
            myTeam.push(engineer);
            console.log("Marvelous! This team member's profile information was saved!");
            console.log(engineer);
            addMember()
        })
}
//if user selects Intern...
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the name of the school that the intern currently attending or recently a graduate of?",
            name: "school",
        },

    ])
        .then(input => {
            const intern = new Intern(input.fullName, input.id, input.email, input.school);
            myTeam.push(intern);
            console.log("Fantastic! This team member's profile information was saved!");
            console.log(intern);
            addMember()
        })
}

// writes HTML file
function generateHTML(input) {
    const HTMLContent = rendereredHTML(input);
    fs.writeFile("./dist/index.html", HTMLContent, (err) =>
    err ? console.log(err) : console.log("Excelsior! Your team profile webpage was successfully generated!")
        );
    };

    module.exports = generateHTML