const inquirer = require('inquirer');
const fs = require('fs');

const questions=[
    {
      type: 'input',
      name: 'name',
      message: 'Type in the text you want on your logo',
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
      name: 'color',
      choices: ['Red', 'Blue', 'Green'],
    },
  ];

  module.exports = {
    questions
  }