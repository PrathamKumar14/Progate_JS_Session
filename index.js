
// *********** Undefined ************

var a; //declared
console.log(a) //Undefined
var a = 3; //defined
console.log(a) //defined 3


//************ var, let, const ***************

const c = 3;
c = c + 3;
console.log(c);

// ********** Iteration ***********

//  print Numbers from 1 to 100

var a = 1;

// ************ While Loop *************

while(a <= 100) {
  console.log(a);
  a = a +1;
}

console.log("control is outside the while loop");

// ************ For loop ***************

for(var i = 1; i <= 100 ; i++) {
  console.log(i);
}

// ************* Array ***************

var numbers = [10, 12, 16, 18, 20]; // Array
console.log(ages);

1. //************* map ***********

   var newNumbers = numbers.map(number => number * 2);
   console.log(newNumbers);

2. //****************** filter ***************

   var newNumbers = numbers.filter(number => number > 15);
   console.log(newNumbers);

3. //*********** find ***********

  var newNumbers = numbers.find(number => number > 19);
  console.log(newNumbers);

4. // *********** findIndex *************

  var newNumbers = numbers.findIndex(number => number > 15);
  console.log(newNumbers);
