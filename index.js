const { questions } = require("./lib/questions");
const generateLogo =require("./lib/generateLogo");
const inquirer = require("inquirer");
const fs = require("fs");


function askQuestions() {
    inquirer.prompt(questions).then((responses) => {
        const logo=generateLogo({responses});
        
        fs.writeFile("logo.svg",logo, (err) =>
            err? console.log(err) : console.log('Success!')
        );
    });
}

// function askQuestions() {
//     inquirer.prompt(questions).then((data) => {
//         const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//         fs.writeFile(filename, JSON.stringify(data,null, '\t'), (err) =>
//             err? console.log(err) : console.log('Success!')
//         );
//     });
// }

function main() {
    askQuestions();
}

main();