
// 1. create a empty variable that contains an empty array
let starWarsFacts = []
// create a function named getFact() that passes as parameter variable array
async function getFact(){

    const fetchList = [
        "https://swapi.dev/api/people/", 
        "https://swapi.dev/api/planets/", 
        "https://swapi.dev/api/films/", 
        "https://swapi.dev/api/species/", 
        "https://swapi.dev/api/vehicles/", 
        "https://swapi.dev/api/starships/"
    ]

    const random = Math.floor(Math.random() * fetchList.length);
        

    const starships = await fetch(fetchList[random]);
    if (starships.ok){
        starWarsFacts = await starships.json()
        output(starWarsFacts);
    }
}

// 3. in this function create a HTML botton

// - Appends the <article> element to the HTML element with an ID of temples
// 4. use the verable we started in step (1) to save the randome fact to display later 
// 5. start a varble to hold fact and initiate the built in method to choose randome a fact and put them in the fallowing 
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
function reset(){
    document.getElementById('facts').innerHTML = '';
}
function output(){
    reset()   
    const starWarsList = starWarsFacts.results;
    console.log('1st', starWarsList)
    
    const outputElement = document.querySelector("#facts");

    let count = starWarsFacts.count;
    if (count === 82)
    {
        
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>Name: ${fact.name}</h3>
            <h4>height: ${fact.height}</h4>
            <h4>hair color: ${fact.hair_color}</h4>
            <h4>skin color: ${fact.skin_color}</h4>
            <h4>eye color: ${fact.eye_color}</h4>
            <h4>birth year: ${fact.birth_year}</h4>
            <h4>gender: ${fact.gender}</h4></article>`
            outputElement.innerHTML = html
    }
    else if (count === 60)
    {
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>Name: ${fact.name}</h3>
            <h4>rotation period: ${fact.rotation_period}</h4>
            <h4>diameter: ${fact.diameter}</h4>
            <h4>climate: ${fact.climate}</h4>
            <h4>gravity: ${fact.gravity}</h4>
            <h4>terrain: ${fact.terrain}</h4>
            <h4>surface water: ${fact.surface_water}</h4>
            <h4>population: ${fact.population}</h4></article>`
            outputElement.innerHTML = html
    }
    else if (count === 6)
    {
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>title: ${fact.title}</h3>
            <h4>episode: ${fact.episode_id}</h4>
            <h4>opening crawl: ${fact.opening_crawl}</h4>
            <h4>director: ${fact.director}</h4>
            <h4>producer: ${fact.producer}</h4>
            <h4>release date: ${fact.release_date}</h4></article>`
            outputElement.innerHTML = html
    }
    else if (count === 37)
    {
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>Name: ${fact.name}</h3>
            <h4>classification: ${fact.classification}</h4>
            <h4>designation: ${fact.designation}</h4>
            <h4>average height: ${fact.average_height}</h4>
            <h4>hair colors: ${fact.hair_colors}</h4>
            <h4>skin colors: ${fact.skin_colors}</h4>
            <h4>eye colors: ${fact.eye_colors}</h4>
            <h4>average_lifespan: ${fact.average_lifespan}</h4>
            <h4>language: ${fact.language}</h4></article>`
            outputElement.innerHTML = html
    }
    else if (count === 39)
    {
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>Name: ${fact.name}</h3>
            <h4>model: ${fact.model}</h4>
            <h4>manufacturer: ${fact.manufacturer}</h4>
            <h4>length: ${fact.length}</h4>
            <h4>max atmosphering speed: ${fact.max_atmosphering_speed}</h4>
            <h4>crew: ${fact.crew}</h4>
            <h4>passengers: ${fact.passengers}</h4>
            <h4>cargo_capacity: ${fact.cargo_capacity}
            <h4>consumables: ${fact.consumables}</h4>
            <h4>vehicle class: ${fact.vehicle_class}</h4></h4></article>`
            outputElement.innerHTML = html
    }
    else if (count === 36)
    {
        const random = Math.floor(Math.random() * starWarsList.length);
        let fact = starWarsList[random];
        const html =`<article>
            <h3>Name: ${fact.name}</h3>
            <h4>model: ${fact.model}</h4>
            <h4>manufacturer: ${fact.manufacturer}</h4>
            <h4>length: ${fact.length}</h4>
            <h4>max atmosphering speed: ${fact.max_atmosphering_speed}</h4>
            <h4>crew: ${fact.crew}</h4>
            <h4>passengers: ${fact.passengers}</h4>
            <h4>cargo_capacity: ${fact.cargo_capacity}
            <h4>consumables: ${fact.consumables}</h4>
            <h4>vehicle class: ${fact.vehicle_class}</h4>
            <h4>hyperdrive rating: ${fact.hyperdrive_rating}</h4>
            <h4>MGLT: ${fact.MGLT}</h4>
            <h4>starship class: ${fact.starship_class}</h4></article>`
            outputElement.innerHTML = html
    }


       
    }
    const  randomBtoon = document.createElement('button')
    randomBtoon.innerHTML = 'Randome Fact';
    document.body.appendChild(randomBtoon);
    randomBtoon.addEventListener('click',getFact);