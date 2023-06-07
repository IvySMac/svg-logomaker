const shapes = require('./shapes.js');

// const questions=[
//     {
//       type: 'input',
//       name: 'text',
//       message: 'Type in the text you want on your logo',
//     },
//     {
//       type: 'input',
//       name: 'textColor',
//       message: 'Input color you would like the text to be',
//     },
    // {
    //   type: 'list',
    //   name: 'shape',
    //   message: 'Choose which shape you want your logo to be',
    //   choices: shapes
    // },
//     {
//       type: 'input',
//       name: 'color',
//       message: 'Input color you would like the shape to be',

//     },
//   ];

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Type in the text you want on your logo',
  },
  {
    type: 'input',
    name: 'color',
    message: 'Input color you would like the shape to be',

  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Input color you would like the text to be',
  },
  {
    type: 'input',
    name: 'shape',
    message: 'Choose which shape you want your logo to be',
  },
];

module.exports = { questions };
