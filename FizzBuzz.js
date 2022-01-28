// Fizzbuzz in JS

var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0) {
        output.push("Fizz");
    }
    if (count % 5 === 0) {
        output.push("Buzz");
    }
    if (count % 5 === 0 && count % 3 === 0) {
        output.push("FizzBuzz");
    } else {
    output.push(count);
    }   
    count++;
    console.log(output);
}
