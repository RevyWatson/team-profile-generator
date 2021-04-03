// packages linked for this application
const inquirer = require("inquirer");
const fs = require("fs");
//linked dist for this application
const rendereredHTML = require("./dist/renderedHTML");

//first prompt for user input. data will sent to the HTML title and header title
inquirer.prompt([
    {
        type: "input",
        message: "What is the team's name?",
        name: "teamName",
        default: "My Team",
    },
])


mainMenu();

//main menu for team member selection
function mainMenu() {

    inquirer.prompt([
        {
            type: "list",
            message: "Please select a job title for team member.",
            name: "jobTitle",
            choices: ["Manager", "Engineer", "Intern", "Finished building my team."],
            default: "Manager",
        },
    ])

        .then(input) = function () {
            if (input.jobTitle === "Manager") {
                managerQuestions();
            } else if (input.jobTitle === "Engineer") {
                engineerQuestions();
            } else if (input.jobTitle === "Intern") {
                internQuestions();
            } else {
                console.log("The information has been successfully saved!");
            }
        }
};

function managerQuestions() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the manager's ID number?",
            name: "idNum",
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the office number associated with this team?",
            name: "officeNum",
        },
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addNew",
        },
    ])

        .then(input) = function () {
            if (input.addNew) {
                mainMenu();
            } else {
                console.log("The information has been successfully saved!");
            }
        }
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "idNum",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "userName",
        },
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addNew",
        },

    ])

        .then(input) = function () {
            if (input.addNew) {
                mainMenu();
            } else {
                console.log("The information has been successfully saved!");
            }
        }
}

function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's full name?",
            name: "fullName",
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "idNum",
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
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addNew",
        },

    ])

        .then(input) = function () {
            if (input.addNew) {
                mainMenu();
            } else {
                console.log("The information has been successfully saved!");
            }
        }
}

// writes HTML file
    .then((data) => {
    const HTMLContent = rendereredHTML(data);

    fs.writeFile("index.html", HTMLContent, (err) =>
        err ? console.log(err) : console.log("Excelsior! Your team profile webpage was successfully generated!")
    );
});