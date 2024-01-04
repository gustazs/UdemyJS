'use strict';

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.IMC = this.mass / (this.height * this.height);
        return this.IMC   
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.IMC = this.mass / (this.height * this.height);
        return this.IMC   
    }
};


console.log(mark.calcBMI());
