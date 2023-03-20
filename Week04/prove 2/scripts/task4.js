/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const userInfo = 
    {
    name: 'Jose Martinez',
    photo: 'images/PXL_20221027_223759921.jpg',
    favoriteFoods:[
        'caldo de res',
        'hamburger helper', 
        'pork chile verde',
        'chineese food'],
    hobbies:[
        'Legos',
        '3D Printing',
        'Video Games'],
    placesLived:[
        {place: 1, place:'1017 S 19th St', length:'1.5 years'},
        {place: 2, place:'19854 Montclair Way', length:'5 Years'}],
    actionList : function (section, idsec){
        const html = section.map(function(step) {
            return `<ul><li>${step}</li></ul>`;
        });
        document.querySelector(idsec).innerHTML = html.join('');
    }
    
    };;

// Step 2: Inside of the object, add a property named name with a value of your name as a string


// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string


// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = userInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', userInfo.photo)
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('alt', userInfo.name)
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// const html = userInfo.favoriteFoods.map(function(step) {
//     return `<ul><li>${step}</li></ul>`;
//   });
userInfo.actionList(userInfo.favoriteFoods,'#favorite-foods');


// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
userInfo.actionList(userInfo.hobbies, '#hobbies')

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

const places = userInfo.placesLived.map(function(section) {
    return `<dl><dt>${section.place}</dt> <dd>${section.length}</dd></dl>`;
});
document.querySelector('#places-lived').innerHTML = places.join('');