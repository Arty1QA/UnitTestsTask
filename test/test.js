'use strict';

const assert = require ('chai').assert;
const calculator = require('../index');

describe ('Calculator', function() {

    it ('Adding different values', function (){
    
    assert.equal(calculator.addValues(1, 1), 2);
    assert.equal(calculator.addValues(100, 100), 200);
    assert.equal(calculator.addValues(45, 65, 2135), 2245);
    assert.equal(calculator.addValues(100, -99), 1);
    assert.equal(calculator.addValues(-100, 99), -1);
    assert.equal(calculator.addValues(-100, -150, -200), -450);
    assert.equal(calculator.addValues(0, 15), 15);
    assert.equal(calculator.addValues(0, -15), -15);
    assert.equal(calculator.addValues(0, 0), 0);
    
});
});