const inquirer = require ('inquirer'); 

const fs = require ('fs'); 

const Circle = require ('./lib/circle'); 

const Triangle = require ('./lib/triangle');

const Square = require ('./lib/square');


// const Shape = require ('./lib/shape');


// create terminal questions to generate logo 

const questions = [
   
        {
            type: 'input', 
            message: '*MAXIMUM 3 LETTERS* Enter 3 letters of text for your logo.',// add failure check for max 3 characters & no text = DONE!
            name: 'logo',
            validate: logoText, 
 
        }, 
        {
            type: 'input', 
            message: 'Enter a color keyword or a hexadecimal number for your TEXT color.', 
            name: 'textcolor',
            validate: validHexaCode,

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
            name: 'shapecolor',  
            validate: validHexaCode,

        },
    ];


// Creating a function that tests for logo text length     
function logoText(response) {
if (!response) {
    return "Please enter a valid response"; // null
    }
if (response.length > 3) {
    return "The logo must be between 1 to 3 characters"; // over 3 characters 
}
return true;
}


// current CSS3 colours 
var colorList = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgray', 'darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray', 'darkslategrey', 'darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgrey','lightgray', 'lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle', 'tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];  

//testing for colours for textcolor & shapecolor 
function validHexaCode(response) {
    // checking for valid hexadecimal colour codes 
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    // If null, prompts user to enter a colour value
    if (!response) {
        return "Please enter a valid colour value"; // null 
    }
    // if the response matches either the colorList or the regex then it will return true 
    if (colorList.includes(response) || regex.test(response) ) {
        return true;
    }
    // prompts the user to enter a valid colour
    else {
        return "Please enter a valid colour value ";
    }
}

    // used to write given data to a file with logo.svg name
    // fileName is name of file i want to write to 
    // data is the data I want to write in the file 
    function writeToFile(fileName, data) {
        // fs.writeFile method writes data to file 
        fs.writeFile(fileName, data, (err) => 
        // return logged message 
        err ? console.log(err) : console.log("Generated logo.svg"))
}

// shapeChoice to determine logo shape 
function shapeChoice(response) {
    // The switch statement within the function defines the shape chosen by the user
    // it creates an object for that shape with the parameters specified (e.g. logo, text color, shape color).
    switch (response.shape) {
        case 'circle':
            const circle = new Circle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./logoSAMPLE/logo.svg', circle.render()) // the object's render() method is triggered, writing out the logo as a SVG file in the logoSAMPLE folder.
            break; 

        case 'triangle':
            const triangle = new Triangle(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./logoSAMPLE/logo.svg', triangle.render())
            break;

        case 'square':
            const square = new Square(response.logo, response.textcolor, response.shapecolor);
            writeToFile('./logoSAMPLE/logo.svg', square.render())
            break;// tells computer to stop 
    }
}

// used to create logo based on user input 
function init() {
     // inquirer.prompt method to ask user set of questions ^ 
    inquirer.prompt(questions)
        .then((response) => { // user responses stored in response variable
            validHexaCode(response);
            shapeChoice(response); 
        })
}

init();



