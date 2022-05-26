let rectangle = require('./rectarea'); 
let area = new rectangle(10,20).areaOfRect;
console.log(`area of rectangle is ${area}`);

let circle1 = require('./util').circle;
let areaCir = new circle1(10).areaOfCircle;
console.log(`area of circle is ${areaCir}`);

let square = require('./util').square;
let square1 = new square(2);
console.log(`area of square is ${square1.areaOfSquare}`);