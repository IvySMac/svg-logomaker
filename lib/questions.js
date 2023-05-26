const inquirer = require('inquirer');
const fs = require('fs');


const questions=[
    {
      type: 'input',
      name: 'name',
      message: 'Type in the text you want on your logo',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Input name of color or hex code',
    },
    {
      type: 'list',
      message: 'Choose which shape you want your logo to be',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'list',
      message: 'What color would you like the shape to be?',
      name: 'shapeColor',
      choices: ['Red', 'Blue', 'Green'],
    },
  ];

  module.exports = {questions};
  