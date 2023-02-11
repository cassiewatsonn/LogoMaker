
// pulling in parent class of shape.js
const Square = require('./shape');

// Constructor class extending to Shape
class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    

    render(){
        return `<svg width="300" height="200">
        <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="200" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }

}

module.exports=Square;