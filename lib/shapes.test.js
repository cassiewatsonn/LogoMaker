const Shape = require('./shape'); 
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');


/// example test (given to us) 
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// TODO: Run test for no text input
// describe ("Shape", () => { /// testing to check that there is no empty text
//     describe("should not have empty text", () =>{
//         it('should have 1-3 characters', () => {
//             const shape = () => new Shape ();
//             const err = new Error('Logo must have 1-3 characters');
//             expect(shape.render()).toEqual(result);
//         })
//     })

    // TODO: Run test for text over three characters


    // TODO: Run test to try triangle shape 
    // describe( () => {
    //     it('should create triangle logo', () => {
    //        const shape = new Triangle();
    //        shape.shapeColor("blue");
    //        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
           
    //      });
    //     });
// describe ("Shape", () => {
        describe('Triangle',() => {
            it('should create triangle logo', () => {
                const shape = new Triangle("YYY", "white", "blue");
                // const text = new Shape();
                // shape.shapeColor("blue");
                // shape.textColor("white");
                // shape.text('YYY');
                expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">YYY</text>');
        
            });
        });


        // describe('Square',() => {
        //     it('should create square logo', () => {
        //         const shape = new Square();
        //         // const text = new Shape();
        //         shape.shapeColor("green");
        //         shape.textColor("yellow");
        //         shape.text = ('YYY');
        //         expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>');
        
        //     });
        // });
        // describe('Circle',() => {
        //     it('should create triangle logo', () => {
        //         const shape = new Triangle();
        //         // const text = new Shape();
        //         shape.shapeColor("blue");
        //         shape.textColor("white");
        //         shape.text = ('YYY');
        //         expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>');
        
        //     });
        // });
// })
    // TODO: Run test to try cricle shape 

    // TODO: Run test to try square shape 


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

