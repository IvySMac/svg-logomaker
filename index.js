const {Circle, Triangle, Square}= require('./lib/shapes');
const { questions } = require("./lib/questions");
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


