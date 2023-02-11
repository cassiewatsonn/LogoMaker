const Shape = require('./shape'); 


/// example test (given to us) 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');



// TRYINGG to test shapes features/colours/text ???  
// describe('Shapes', () => {
//     it('should change the looks of Shape .. text, textcolor, shapecolor', () => {
//         const shape = new Shape('CAT', 'black', 'yellow');
//         expect(shape).toEqual({text: 'CAT', textColor: 'black', backgroundColor: 'yellow'});
//     });

// }); 



// TODO: Run test for no shape colour 

// TODO: Run test for invalid shape colour???

// TODO: Run test for no text colour 

// TODO: Run test for invalid text colour??? 

// TODO: Run test for no text input

// TODO: Run test for text over three characters