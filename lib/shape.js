class Shape {
    constructor(text, textColor, shapeColor){
        this.test = test; 
        this.textColor = textColor; 
        this.shapeColor = shapeColor; 
    }
// Complete 1st Error Check 
    render() {

    }
}




/// example test (given to us) 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
