const Shape = require('./shape'); 


/// example test (given to us) 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




// TRYINGG to test shapes features/colours/text ???  
// describe('Shapes', () => {
//     it('changes looks of Shape', () => {
//         const shape = new Shape('test', 'red', 'blue');
//         expect(shape).toEqual({text: 'CAT', textColor: 'black', backgroundColor: 'yellow'});
//     });

// }); 