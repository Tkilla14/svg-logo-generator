const {Circle, Square, Triangle} = require("./shapes")



  // Square Shape
  describe('Square', () => {
    test('renders shape & color correctly', () => {
      const newShape = new Square();
      var color =('yellow')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
  });

// Circle Shape
describe('Circle', () => {
    test('renders shape & color correctly', () => {
      const newShape = new Circle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });

  // Triangle Shape
  describe('Triangle', () => {
      test('renders shape & color correctly', () => {
        const newShape = new Triangle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });