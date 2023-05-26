const { questions } = require("./lib/questions");
const generateLogo =require("./lib/generateLogo");
const inquirer = require("inquirer");
const fs = require("fs");


function askQuestions() {
    inquirer.prompt(questions).then(({name, textColor}) => {
        const logo=generateLogo(name, textColor);
        
        fs.writeFile("logo.svg",logo, (err) =>
            err? console.log(err) : console.log('Success!')
        );
    });
}

function main() {
    askQuestions();
}

main();