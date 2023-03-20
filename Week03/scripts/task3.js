"use strict";
/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2


// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
//adding
function add(number1, number2)
{
    return number1 + number2;
}

function addnumbers()
{
    let addEndTwo = parseFloat(document.getElementById("addend1").value);
    let addEndOne = parseFloat(document.getElementById("addend2").value);

    const sum = add(addEndOne, addEndTwo);
    
    document.getElementById('sum').value = sum
    
}
document.getElementById("addNumbers").addEventListener("click", addnumbers);

//subtract
const subtract = function(number1, number2)
{
    return number1 - number2;
}

const subtractCal = function Subnumbers()
{
    let minuEnd = parseFloat(document.getElementById("minuend").value)
    let subtrahEnd = parseFloat(document.getElementById('subtrahend').value)

    const total = subtract (minuEnd, subtrahEnd);
    
    document.getElementById('difference').value = total;
    
}
document.getElementById("subtractNumbers").addEventListener("click", subtractCal);

// multiply

const multiply = (number1 , number2) => number1 * number2;

const calculation = () =>
{
    let factorEndOne = parseFloat(document.getElementById("factor1").value);
    let factorEndTwo = parseFloat(document.getElementById('factor2').value);

    const total = multiply(factorEndOne, factorEndTwo);
    
    document.getElementById('product').value = total;
    
}
document.getElementById("multiplyNumbers").addEventListener("click", calculation);

const devide = (number1, number2) => number1 / number2;

const divition = () => 
{
    let dividendEndOne = parseFloat(document.getElementById("dividend").value);
    let divisorEndTwo = parseFloat(document.getElementById('divisor').value);

    const total = devide(dividendEndOne, divisorEndTwo)

    document.getElementById('quotient').value = total;
}

document.getElementById('divideNumbers').addEventListener('click', divition);


/* ARRAY METHODS */

// year date 
const dateTime = new Date().getFullYear();

document.getElementById("year").innerHTML = dateTime;

// array methods

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

document.getElementById('array').innerHTML = numbers;

const oddNumbers = numbers.filter((number) => number % 2 === 1);

document.getElementById('odds').innerHTML = oddNumbers;

const evenNum = numbers.filter((number) => number % 2 === 0);

document.getElementById('evens').innerHTML = evenNum;

const sumNum = numbers.reduce((number1, number2) => number1 + number2);

document.getElementById('sumOfArray').innerHTML = sumNum;

const multNum = numbers.map((number) => number * 2);

document.getElementById('multiplied').innerHTML = multNum;

const somOfMulti = numbers.map((number) => number * 2).reduce((number1, number2) => number1 + number2);

document.getElementById('sumOfMultiplied').innerHTML = somOfMulti;