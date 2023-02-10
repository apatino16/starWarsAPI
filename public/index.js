// Information to reach Star Wars API

const swapi = "https://swapi.dev/api/";

// Selecting page elements

const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField')

// Random Number generator from 1 to 83; total number of characters in Star Wars
let ranNum = Math.floor(Math.random() * (83 - 1 + 1) + 1);


// Fetch Characters Name from SWAPI
const getCharacter = async ( ) => {
    try{
      const response = await fetch(`${swapi}people/${ranNum}/`);
        if(response.ok){
          const jsonResponse = await response.json( );
          responseField.innerHTML = 
          `<text> <strong> ${jsonResponse.name} </strong></text>
          <p>Fun facts about you: </p>
          <p>Height: ${jsonResponse.height}cm</p>
          <p>Mass: ${jsonResponse.mass}kg</p>
          <p>Hair color: ${jsonResponse.hair_color}</p>
          <p>Skin color: ${jsonResponse.skin_color}</p>
          <p>Eye color: ${jsonResponse.eye_color}</p>
          <p>Birth year: ${jsonResponse.birth_year}</p>
          <p>Gender: ${jsonResponse.gender}</p`;
          console.log(jsonResponse)
        }
      } catch(error) {
        console.log(error);
     }
    
   
    }

submit.addEventListener('click', getCharacter());


// Fetch Films from SWAPI
const film1 = document.querySelector('#film1')
const getFilm = async ( ) => {
    try{
      const response = await fetch(`${swapi}films/1/`);
        if(response.ok){
          const jsonResponse = await response.json( );
          film1.innerHTML = 
          ` <text> ${jsonResponse.title}</text>
          <p> ${jsonResponse.release_date}</p>
          <p> ${jsonResponse.director}</p>
          <p> ${jsonResponse.producer}</p>
          <p> ${jsonResponse.characters}</p>`;
           
          console.log(jsonResponse)
        }
      } catch(error) {
        console.log(error);
     }
    }

    getFilm();