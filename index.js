const fs = require('fs');
const inquirer = require("inquirer");
const { Shape, Circle, Triangle, Square } = require('./lib/shapes.js');

class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }
  
}

const questions = [
  {
      type: "input",
      name: "text",
      message: "Enter up to (3) Characters:",
  },
  {
      type: "input",
      name: "text-color",
      message: "Enter a color keyword (OR a hexadecimal number):",
  },
  {
      type: "input",
      name: "color",
      message: "Enter a color keyword (OR a hexadecimal number):",
  },
  {
      type: "list",
      name: "shape",
      message: "Choose which shape you would like?",
      choices: ["Circle", "Square", "Triangle"],
  },
];

function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

async function init() {
  console.log("Starting init");
var svgString = "";
var svg_file = "logo.svg";
}

 var dataText = ("text")
// User generate text
if (dataText > 0 && dataText < 4) {
  // 1-3 chars, valid entry
  data.text = answers["text"];
} else {
  // 0 or 4+ chars, invalid entry
  console.log("Err.. Incorrect number of characters, try again.");
      return;
}
console.log("User text: [" + data.text + "]");
//user font color
data.textColor = answers["text-color"];
console.log("User font color: [" + data.textColor + "]");
//user shape color
data.color = answers["color"];
console.log("User shape color: [" + data.color + "]");
//user shape type
data.shape = answers["shape"];
console.log("User entered shape = [" + data.shape + "]");


// User generate shape
function generateShape(data) {
  if (data.shape == "Circle") {
    const newCircle = new Circle(
      `${data.text}`,
      `${data.textColor}`,
      `${data.color}`
    );
    console.log(newCircle);
    return newCircle;
  }
  else if (data.shape == "Triangle") {
    const newTriangle = new Triangle(
      `${data.text}`,
      `${data.textColor}`,
      `${data.color}`
    );
    console.log(newTriangle);
    return newTriangle;
  }
  else if (data.shape == "Square") {
    const newSquare = new Square(
      `${data.text}`,
      `${data.textColor}`,
      `${data.color}`,
    );
    console.log(newSquare);
    return newSquare;
  }

}

var svg = new Svg();
svg.setTextElement(data.text, data.textColor);
svg.setShapeElement(data.shape);
svgString = svg.render();

function init() {
  const answers = inquirer.prompt(questions).then(data => {
    console.log(data);
    console.log("Shape generation complete!");

    const Shape = new createShape(data);

    writeToFile('./examples/Shapes.svg', generateShape(Shape));
  })
}

init();

