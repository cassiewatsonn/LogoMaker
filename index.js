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

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): console.log("Generated logo.svg"))
}


/// trying to create function to determine the selection of square, circle or triangle...... 
/// TRYING.... 
// function shapeChoice(shape){
//     if (shape === circle)
//     then (response => {
//         console.log(response); 
//         const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
//         writeToFile('logo.svg', circle.render())
//     })
//     else if (shape === triangle)
//     then (response => {
//         console.log(response); 
//         const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
//         writeToFile('logo.svg', triangle.render())
//     })
//     else if (shape === square)
//     then (response => {
//         console.log(response); 
//         const square = new Square(response.logo, response.textcolor, response.shapecolor);
//         writeToFile('logo.svg', square.render())
//     })
// }

function init() {
    inquirer.prompt(questions)
    .then(response =>{
        console.log(response);
        const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
        // let readText = utils(response)
        writeToFile('logo.svg', circle.render())
    }) 
}

init();



