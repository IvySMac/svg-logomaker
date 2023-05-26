// const shape = new Circle();
// shape.setColor("green");
// expect(shape.render()).toEqual(`<svg width="100" height="100">
// <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" />
// </svg>
// `)
const questions= require('./questions');


const text = new Text();
text.setColor("black");
expect(text.render()).toEqual(`

<svg height="30" width="200">
  <text x="0" y="15" fill="red"></text>
</svg>

`)

//``

module.exports={
    text
}
