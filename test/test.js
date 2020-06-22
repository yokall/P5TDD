'use strict';

// Import the expect library.  This is what allows us to check our code.
// You can check out the full documentation at http://chaijs.com/api/bdd/
const expect = require('chai').expect;
// Import our ColorIncreaser class.
const ColorIncreaser = require('../sketch');

function mockColor(red, green, blue, alpha) {
    // Mock of the color class from p5
    this.levels = [];
    this.levels[0] = red;
    this.levels[1] = green;
    this.levels[2] = blue;
    this.levels[3] = alpha;
}

describe('ColorIncreaser tests', function () {
    // Will hold the reference to the ColorIncreaser class
    let colorIncreaser;

    // beforeEach is a special function that is similar to the setup function in
    // p5.js.  The major difference it that this function runs before each it()
    // test you create instead of running just once before the draw loop
    // beforeEach lets you setup the objects you want to test in an easy fashion.
    beforeEach(function () {
        let colorValueIncrease = 1;
        let fillColor = new mockColor(0, 0, 0, 255);
        colorIncreaser = new ColorIncreaser(colorValueIncrease, fillColor);
    });

    it('should be an object', function (done) {
        expect(colorIncreaser).to.be.a('object');
        done();
    });

    it('should store initial values without mutation', function (done) {
        expect(colorIncreaser.colorValueIncrease).to.be.equal(1);
        expect(colorIncreaser.fillColor.levels[0]).to.equal(0)
        expect(colorIncreaser.fillColor.levels[1]).to.equal(0)
        expect(colorIncreaser.fillColor.levels[2]).to.equal(0)
        expect(colorIncreaser.fillColor.levels[3]).to.equal(255);
        done();
    });
});