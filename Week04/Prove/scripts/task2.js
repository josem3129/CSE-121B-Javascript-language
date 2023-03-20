/* Lesson 4 */
const userInfo = 
    {
    name: 'Jose Martinez',
    photo: 'images/PXL_20221027_223759921.jpg',
    favoriteFoods:[
        'caldo de res',
        'homemade hamburger helper', 
        'pork chile verde',
        'chineese food'],
    hobbies:[
        'Legos',
        '3D Printing',
        'Video Games'],
    placesLived:[
        {place: 1, place:'1017 S 19th St', length:'1.5 years'},
        {place: 2, place:'19854 Montclair Way', length:'5 Years'}]
    
    };

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Jose Martinez'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = userInfo.name;


// Step 3: declare and instantiate a variable to hold the current year

let curentYear = 2023;


// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = curentYear;


// Step 5: declare and instantiate a variable to hold the name of your picture

let myImg = 'images/PXL_20221027_223759921.jpg';


// Step 6: copy your image into the "images" folder
// done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', userInfo.photo)
document.querySelector('img').setAttribute('alt', userInfo.name)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let foods = ['caldo de res', ' homemade hamburger helper', ' pork chile verde', ' chineese food']


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food
let otherFood = ' cheese burger';

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(otherFood);


// Step 5: repeat Step 2
// document.querySelector('#food').innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
// document.querySelector('#food').innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();


// Step 7: repeat Step 2
// document.querySelector('#food').innerHTML = foods;

// Declare a new variable to hold information about yourself and assign an empty object to the variable ( hint: {} )

// Add a property to this object literal named name and set its value to be your name as a string.

// Add a property named photo. Set its value to be an image's path and name (one used in Task 2) as a string.

// Add a property named favoriteFoods. Set its value to be an array of your favorite foods as strings ( hint: [] ).

// Add a property named hobbies. Set its value to be an array of your hobbies as strings.

// Add a property named placesLived. Set its value to be an empty array.

// Add an item to the placesLived array that is new object literal with two properties: place and length

// For each of these properties, add appropriate values as strings.

// Add additional object literals with appropriate values to the placesLived array for each place you've lived


