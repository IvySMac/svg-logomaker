class Shapes {
  constructor(color){
    this.color=color;
  }
  setColor(color){
    this.color=color;
  }
}

class Circle extends Shapes{
  constructor (text, color, textColor){
    super(color); 
    this.text=text;
    this.textColor=textColor;
  }



  render(){
    return `<svg height="300" width="200"><circle cx="100" cy="100" r="90" fill="${this.color}"/><text font-size="50" text-anchor="middle" fill="${this.textColor}" x="100" y="120">
    ${this.text}
  </text></svg>`;
  }
}

class Triangle extends Shapes{
  constructor (text, color, textColor){
    super(color); 
    this.text=text;
    this.textColor=textColor;
  }



  render(){
    return `<svg height="300" width="200"><polygon points="100,0 10,130 190,130" fill="${this.color}"/><text font-size="50" text-anchor="middle" fill="${this.textColor}" x="100" y="120">
    ${this.text}
  </text></svg>`;
  }
}

class Square extends Shapes{
  constructor (text, color, textColor){
    super(color); 
    this.text=text;
    this.textColor=textColor;
  }



  render(){
    return `<svg height="300" width="200"><rect x="0" y="0" width="300" height="200" fill="${this.color}"/><text font-size="50" text-anchor="middle" fill="${this.textColor}" x="100" y="120">
    ${this.text}
  </text></svg>`;
  }
};


module.exports= {Circle, Triangle, Square};

