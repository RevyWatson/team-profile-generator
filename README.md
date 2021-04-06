# Team Profile Generator 

## Description
This application generates a team profile html file using the command-line terminal. The user inputs the information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## Table of Contents
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Acceptance Criteria
* A command-line application that accepts user input
* When user is prompted for team members and their information an HTML file is generated that displays a nicely formatted team roster based on user input.
* When user clicks on an email address in the HTML their default email program opens and populates the TO field of the email with the address.
* When user clicks on the GitHub username that GitHub profile opens in a new tab
* When user starts the application they are prompted to enter the team manager’s name, employee ID, email address, and office number.
* When user enters the team manager’s name, employee ID, email address, and office number they are presented with a menu with the option to add an engineer or an intern or to finish building their team
* When user selects the engineer option they are prompted to enter the engineer’s name, ID, email, and GitHub username, and they are taken back to the menu.
* When user select the intern option they are prompted to enter the intern’s name, ID, email, and school, and they are taken back to the menu.
* When user decides to finish building their team and they exit the application, the HTML is generated.

## Installation
1. Open the command terminal on your machine.
2. Navigate through your file system to the location of the “index.js” file.
3. Within the same file, create a .gitignore.txt file to ignore the node modules.
4. Install the Inquirer package by typing “npm install inquirer”.
5. Install the Jest package by typing “npm install jest”.
6. Type, “node index.js” to run the application.
7. Answer the questions as you are prompted. Enjoy your generated team profile html file!

## Usage
Click the link to view the [Team Profile Generator]() in action!

## Credits
This application was built using [NodeJS](https://nodejs.org/en/) and utilized the [Inquirer package](https://www.npmjs.com/package/inquirer) and the [Jest package](https://www.npmjs.com/package/jest). The template for the generated HTML file was drafted using dynamic HTML and CSS and utilized the CSS framework [Bootstrap](https://getbootstrap.com/).

## Tests
After installing Inquirer and Jest, you can run the tests by typing "npm run test" in the command line terminal.
    
![Team Profile Generator TESTS](https://user-images.githubusercontent.com/76264693/113642775-9e287880-964e-11eb-8a24-2aa1e4f2ddac.gif)

## Questions
  Have questions or comments about this application?
- Please feel free to email me at: garzoni.webdev@gmail.com
- Or find me on GitHub at: [RevyWatson](https://github.com/RevyWatson)

