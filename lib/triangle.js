// pulling in parent class of shape.js
const Shape = require('./shape');

// Constructor class extending to Shape
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); // super is pulling parameters from shape class
    }
    

    render(){
        return `<svg  width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor}/>
        <text x="150" y="200" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>
        `
    }

}

module.exports=Triangle;