class Shape {
    constructor(text, textColor, shapeColor){
        // throw error if more than 3 characters after all questions are inputted 
        if (text.length > 3) {
            throw new Error("Text cannot be more then THREE characters!");
        } 

        // throw error if logo text is empty 
        if (!text){
            throw new Error ("Logo text cannot be blank!")
        }
        
        // assign text, textcolor and shape color to variables 
        this.text = text; 
        this.textColor = textColor; 
        this.shapeColor = shapeColor;
    };

   
// Complete 1st Error Check 
    render() {

    }
}







module.exports = Shape; 