class ColorIncreaser {
    constructor(colorValueIncrease, fillColor) {
        // Stores a value and a color and allows you to increase the color
        // by that value.
        this.colorValueIncrease = colorValueIncrease
        this.fillColor = fillColor;
    }

    increaseFillColor() {
        // increase the first color channel by one.  If that channel
        // is now > 255 then increment the next color channel.  Repeat for second
        // and third channel
        this.fillColor.levels[0] += this.colorValueIncrease
        this.numColorsSoFar += 1

        if (this.fillColor.levels[0] > 255) {
            this.fillColor.levels[0] = 0
            this.fillColor.levels[1] += this.colorValueIncrease
        }
        if (this.fillColor.levels[1] > 255) {
            this.fillColor.levels[1] = 0
            this.fillColor.levels[2] += this.colorValueIncrease
        }
        if (this.fillColor.levels[2] > 255) {
            this.fillColor.levels[2] = 0;
        }
    }
}

/* istanbul ignore else */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ColorIncreaser;
