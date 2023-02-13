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



    // TODO: Test Shape 

    describe('Shape', () => {
        it('should test logo color for Shape', () => {
            const shape = new Shape("YYY", "white", "blue");
            expect(shape.text).toEqual("YYY");
        });
        it('should test text color for Shape', () => {
            const shape = new Shape("YYY", "white", "blue");
            expect(shape.textColor).toEqual("white");
        });
        it('should test shape color for Shape', () => {
            const shape = new Shape("YYY", "white", "blue");
            expect(shape.shapeColor).toEqual("blue");
        });
    })


    // TODO: Run test to try triangle shape 
    // describe( () => {
    //     it('should create triangle logo', () => {
    //        const shape = new Triangle();
    //        shape.shapeColor("blue");
    //        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
           
    //      });
    //     });
// describe ("Shape", () => {
        // describe('Triangle',() => {
        //     it('should create triangle logo', () => {
        //         const shape = new Triangle("YYY", "white", "blue");
        //         expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">YYY</text>');
        
        //     });
        // });

        describe('Triangle', () => {
            it('should create triangle shape', () => {
                const triangle = new Triangle("YYY", "white", "blue");
                expect(triangle.render()).toEqual(`<svg height="200" width="300">
                <polygon points="150, 18 244, 182 56, 182" fill="blue"/> 
                <text x="150" y="160" font-size="60" text-anchor="middle" fill="white">YYY</text>
                </svg>
                `)
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

    describe('Circle', () => {
        it('should create triangle shape', () => {
            const circle = new Circle("YYY", "white", "blue");
            expect(circle.render()).toEqual(`<svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="blue"/> 
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">YYY</text>
            </svg>
            `)
        });
    });

    // TODO: Run test to try square shape 

    describe('Square', () => {
        it('should create square shape', () => {
            const square = new Square("YYY", "white", "blue");
            expect(square.render()).toEqual(`<svg height="200" width="300">
            <rect x="50" y="20" width="150" height="150" fill="blue"/> 
            <text x="125" y="115" font-size="60" text-anchor="middle" fill="white">YYY</text>
            </svg>
            `)
        });
    });


// TRYINGG to test shapes features/colours/text ???  
// describe('Shapes', () => {
//     it('should change the looks of Shape .. text, textcolor, shapecolor', () => {
//         const shape = new Shape('CAT', 'black', 'yellow');
//         expect(shape).toEqual({text: 'CAT', textColor: 'black', backgroundColor: 'yellow'});
//     });
// }); 




