const inquirer = require ('inquirer'); 

const fs = require ('fs'); 

const Circle = require ('./lib/circle'); 


// create terminal questions to generate logo 

const questions = [
   
        {
            type: 'input', 
            message: '*MAXIMUM 3 LETTERS* Enter 3 letters of text for your logo.',
            name: 'logo', 
 
        }, 
        {
            type: 'input', 
            message: 'Enter a color keyword or a hexadecimal number for your TEXT color.', 
            name: 'textcolor', 

        }, 
        {
            type: 'list', 
            message: 'Choose a shape for your logo.', 
            name: 'shape', 
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input', 
            message: 'Enter a color keyword or a hexadecimal number for your SHAPE COLOR.', 
            name: 'shapecolor', 

        },
    ];

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): console.log("Generated logo.svg"))
}

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