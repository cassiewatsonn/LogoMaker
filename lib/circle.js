// pulling in parent class of shape.js
const Shape = require('./shape');

// Constructor class extending to Shape
class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    

    render(){
        return `<svg height="200" width="300">
        <circle cx="150" cy="150" r="50" fill=${this.shapeColor}/> 
        <text x="150" y="200" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }

}

module.exports=Circle;