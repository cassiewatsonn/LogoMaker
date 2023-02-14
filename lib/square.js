// pulling in parent class of shape.js
const Shape = require('./shape');

// Constructor class extending to Shape
class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    // this render for html code(square), must match exactly to shapes.test.js for test to pass 
    render(){
        return `<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports=Square;