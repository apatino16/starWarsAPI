// Information to reach Star Wars API

const swapi = "https://swapi.dev/api/";

// Selecting page elements

const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField')

// Random Number generator from 1 to 83; total number of characters in Star Wars
let ranNum = Math.floor(Math.random() * (83 - 1 + 1) + 1);


// Fetch Characters from SWAPI
const getCharacter = async ( ) => {
    try{
      const response = await fetch(`${swapi}people/${ranNum}/`);
        if(response.ok){
          const jsonResponse = await response.json( );
          return jsonResponse
        }
        throw new Error('Request failed!');
  
      } catch(error) {
        console.log(error);
     }
    
   
    }

submit.addEventListener('click', getCharacter());
