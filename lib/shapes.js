class Shape{
  
      constructor(){
          this.color=''
      }
      setColor(color){
        this.color=(color);
    }
  
  }

class Circle extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
    this.cx = "150";
    this.cy = "100";
    this.r = "80";
  }

    render() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}"/>`;
    }
  }

class Square extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
    this.x = "80";
    this.y = "30";
    this.width = "180";
    this.height = "180";
  }
  render(){
      return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
  constructor(text, textColor, color) {
    super(text, textColor, color);
    this.points = "0,200 300,200 150,0";
    this.textFontSize = "80";
  }

  render(){
      return `<polygon points='${this.points}' fill='${this.color}'/>`
  }
};


module.exports = { Shape, Circle, Triangle, Square };