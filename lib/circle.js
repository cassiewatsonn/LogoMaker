const Shape = require('./shape');

class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
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