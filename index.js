const { questions } = require("./lib/questions");
const generateLogo =require("./lib/generateLogo");
const inquirer = require("inquirer");
const fs = require("fs");


function askQuestions() {
    inquirer.prompt(questions).then(({name, textColor,shapes, shapeColor}) => {
        const logo=generateLogo(name, textColor, shapes, shapeColor);
        
        fs.writeFile("logo.svg",logo, (err) =>
            err? console.log(err) : console.log('Generated logo.svg')
        );
    });
}

function main() {
    askQuestions();
}

main();