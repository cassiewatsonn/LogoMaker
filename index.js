const inquirer = require ('inquirer'); 

const fs = require ('fs'); 

const Circle = require ('./lib/circle'); 

// const Triangle = require ('./lib/triangle');

// const Square = require ('./lib/square');

// const Shape = require ('./lib/shape');


// create terminal questions to generate logo 

const questions = [
   
        {
            type: 'input', 
            message: '*MAXIMUM 3 LETTERS* Enter 3 letters of text for your logo.',// add failure check for max 3 characters
            name: 'logo', 
 
        }, 
        {
            type: 'input', 
            message: 'Enter a color keyword or a hexadecimal number for your TEXT color.', 
            name: 'textcolor', // failure check????

        }, 
        {
            type: 'list', 
            message: 'Choose a shape for your logo.', 
            name: 'shape', 
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input', 
            message: 'Enter a color keyword or a hexadecimal number for your SHAPE COLOR.', 
            name: 'shapecolor', /// failure check???? 

        },
    ];

    // used to write given data to a file with logo.svg name
    // fileName is name of file i want to write to 
    // data is the data I want to write in the file 
    function writeToFile(fileName, data) {
        // fs.writeFile method writes data to file 
        fs.writeFile(fileName, data, (err) => 
        // return logged message 
        err ? console.log(err) : console.log("Generated logo.svg"))
}



/// trying to create function to determine the selection of square, circle or triangle...... 
/// TRYING.... 
function shapeChoice(shape){
    if (shape === circle){
        console.log(response); 
        const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
        writeToFile('logo.svg', circle.render())
    }
    else if (shape === triangle){
        console.log(response); 
        const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
        writeToFile('logo.svg', triangle.render())
    }
    else if (shape === square){
        console.log(response); 
        const square = new Square(response.logo, response.textcolor, response.shapecolor);
        writeToFile('logo.svg', square.render())
    }
}

// used to create logo based on user input 
function init() {
    // inquirer.prompt method to ask user set of questions ^ 
    inquirer.prompt(questions)
    .then(response =>{ // user responses stored in response variable
        console.log(response);
        // created circle object with logo,textcolor,shapecolor from response variable
        const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
        // writeToFile to create svg file. circle.render to make logo
        writeToFile('logo.svg', circle.render())
    }) 
}


init();



