// pulling in parent class of shape.js
const Shape = require('./shape');

// Constructor class extending to Shape
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    
// this render for html code(triangle), must match exactly to shapes.test.js for test to pass 
    render(){
        return `<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports=Triangle;