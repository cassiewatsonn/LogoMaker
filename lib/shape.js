class Shape {
    constructor(text, textColor, shapeColor){
        // throw error if more than 3 characters after all questions are inputted 
        if (text.length > 3) {
            throw new Error("Text cannot be more then THREE characters");
        } 

        // throw error if logo text is empty 



        this.text = text; 
        this.textColor = textColor; 
        this.shapeColor = shapeColor;
    };

   
// Complete 1st Error Check 
    render() {

    }
}







module.exports = Shape; 