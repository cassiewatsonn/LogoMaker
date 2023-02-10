const inquirer = require ('inquirer'); 

const fs = require ('fs'); 


// create terminal questions to generate logo 

inquirer 
    .prompt([
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
    ]);

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): console.log("Generated logo.svg"))
}

function init() {
    inquirer.prompt(questions)
    .then(response =>{
        let readText = utils(response)
        writeToFile('logo.svg', readText)
    }) 
}

init();