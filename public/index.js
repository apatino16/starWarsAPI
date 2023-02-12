// Information to reach Star Wars API

const swapi = "https://swapi.dev/api/";


// HOME PAGE

// Selecting page elements

const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField')

// Random Number generator from 1 to 83; total number of characters in Star Wars
let ranNum = Math.floor(Math.random() * (83 - 1 + 1) + 1);

// Fetch Characters from SWAPI
async function getCharacter() {
  try {
    const response = await fetch(`${swapi}people/${ranNum}/`);
    if (response.ok) {
      const jsonResponse = await response.json();
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
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error.message);
  }
}

submit.addEventListener('click', getCharacter());
