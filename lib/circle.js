// pulling in parent class of shape.js
const Shape = require('./shape');

// Constructor class extending to Shape
class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    
    // this render for html code(circle), must match exactly to shapes.test.js for test to pass 
    render(){
        return `<svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}


module.exports=Circle;