const Shape = require('./shape'); 
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');


// test shape class 
    describe('Shape', () => {
        // testing text attribute
        it('should test logo color for Shape', () => {
            const shape = new Shape("CAT", "yellow", "black");
            expect(shape.text).toEqual("CAT");
        });
        // testing textColor attribute 
        it('should test text color for Shape', () => {
            const shape = new Shape("CAT", "yellow", "black");
            expect(shape.textColor).toEqual("yellow");
        });
        // testing shapeColor attribute 
        it('should test shape color for Shape', () => {
            const shape = new Shape("CAT", "yellow", "black");
            expect(shape.shapeColor).toEqual("black");
        });
    })

    // create a triangle shape using html 
    describe('Triangle', () => {
        it('should create triangle shape', () => {
            const triangle = new Triangle("CAT", "yellow", "black");
            expect(triangle.render()).toEqual(`<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="black"/>
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="yellow">CAT</text>
        </svg>`)
        });
    });

    // create a square shape using html 
    describe('Square', () => {
        it('should create square shape', () => {
            const square = new Square("CAT", "yellow", "black");
            expect(square.render()).toEqual(`<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="black"/>
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="yellow">CAT</text>
        </svg>`)
        });
    });

    // create a circle using html
    describe('Circle', () => {
        it('should create triangle shape', () => {
            const circle = new Circle("CAT", "yellow", "black");
            expect(circle.render()).toEqual(`<svg height="200" width="300">
            <circle cx="150" cy="100" r="80" fill="black"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">CAT</text>
            </svg>`)
        });
    });
