// This is for a unit test tutorial.
// it should create a rectangle and allow you to iterate over
// every single color.
//
// colorValueIncrease sets the amount the color changes on each
// draw loop. Values greater than 255 will break the sketch.
// fillColor will be the color of the rectangle.
// colorIncreaser will become an instance of our ColorIncreaser class.

let sketch = function (p) {
    let colorValueIncrease = 1;
    let fillColor;
    let colorIncreaser;

    p.setup = function () {
        p.createCanvas(500, 500);
        p.background(0);
        fillColor = p.color(0, 0, 0, 255);
        p.noStroke();

        colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);
    }

    p.draw = function () {
        p.fill(colorIncreaser.fillColor);
        p.rect(0, 0, 500, 500);
        colorIncreaser.increaseFillColor();
    }
}

let myp5 = new p5(sketch);
