const {Circle, Triangle, Square}= require('./lib/shapes');
const { questions } = require("./lib/questions");
// const generateLogo =require("./lib/generateLogo");
const inquirer = require("inquirer");
const fs = require("fs");

function askQuestions() {
inquirer.prompt(questions)
.then(({color,textColor,shape,text})=> {
    if (shape==='Circle'){
        shape=new Circle(text, color, textColor);
    }
    else if (shape==='Triangle'){
        shape=new Triangle(text, color, textColor);
    }
    else {
        shape=new Square(text, color, textColor);
    }
return shape.render();

})

.then((templateString)=> {
    fs.writeFile("logo.svg",templateString, (err) =>
    err? console.log(err) : console.log('Generated logo.svg')
    );
});
}

function main() {
    askQuestions();
}

main();


// function askQuestions() {
//     inquirer.prompt(questions).then(({name, textColor,shapes, shapeColor}) => {
//         const logo=generateLogo(name, textColor, shapes, shapeColor);
//         //else if statement here
//         //shape=new Triangle
//         fs.writeFile("logo.svg",logo, (err) =>
//             err? console.log(err) : console.log('Generated logo.svg')
//         );
//     });
// }

// function main() {
//     askQuestions();
// }

// main();