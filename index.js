'use strict.';

class Calculator {
        multiplyValues () {
            var val =1; 
            for (var i=0; i<arguments.length; i++) {
             val *= arguments[i];
            }
            return val;
        }

        addValues () {
            var val1 =0;
            for (var i=0; i<arguments.length; i++) {
             val1 += arguments[i];
            }
            return val1;
        }
        
}

var calculator = new Calculator;
console.log(calculator.addValues(0, 0));
console.log(calculator.multiplyValues(5, 5, 4, 5));

module.exports = calculator;
