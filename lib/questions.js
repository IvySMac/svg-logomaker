const shapes=require('./shapes.js');

const questions=[
    {
      type: 'input',
      name: 'name',
      message: 'Type in the text you want on your logo',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Input color you would like the text to be',
    },
    {
      type: 'list',
      name: 'shapes',
      message: 'Choose which shape you want your logo to be',
      choices: shapes
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Input color you would like the shape to be',

    },
  ];

  module.exports = {questions};
  