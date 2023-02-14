class Shape {
    constructor(text, textColor, shapeColor) {
        
        // assign text, textcolor and shape color to variables 
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;


        // throw error if logo text is empty 
        if (!text) {
            throw new Error("You must input logo text (up to three characters)!")
        }

        // throw error if text colour is empty 
        if (!textColor) {
            throw new Error("You must input a text colour!")
        }

        // throw error if shape background colour is empty 
        if (!shapeColor) {
            throw new Error("You must input a shape background colour!")
        }

        // throw error if more than 3 characters after all questions are inputted 
        if (text.length> 3) {
            throw new Error("Text cannot exceed 3 characters!");
        }
        
        // throw error if both colours are the same
        if (shapeColor == textColor) {
            throw new Error("The text and shape colours can't be the same!")
        }
        // TODO: throw error if text colour not found 



        // TODO: throw error if shape background colour is not found 




    };
    // Is this needed???? 
    // catch (error) {
    //     console.error(error);
    // }


    // TODO: Complete 1st Error Check ???? 
    render() {


    }
}







module.exports = Shape; 