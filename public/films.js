// JS file for FILMS PAGE

// Information to reach Star Wars API

const swapi = "https://swapi.dev/api/";

// Fetch Films from SWAPI
const filmInfo1 = document.querySelector('#filmInfo1');
const filmInfo2 = document.querySelector('#filmInfo2');
const filmInfo3 = document.querySelector('#filmInfo3');
const filmInfo4 = document.querySelector('#filmInfo4');
const filmInfo5 = document.querySelector('#filmInfo5');
const filmInfo6 = document.querySelector('#filmInfo6');

async function getFilm() {
  try {
    const filmNumber = await fetch(`${swapi}films`);
    if (filmNumber.ok) {
        const filmResponse = await filmNumber.json();
        console.log(filmResponse);

        filmInfo1.innerHTML = 
            `<h2><strong>${filmResponse.results[0].title}</strong></h2>
            <p>${filmResponse.results[0].release_date} </p>
            <p> Director: ${filmResponse.results[0].director} </p>
            <p> Producers: ${filmResponse.results[0].producer} </p>
            <p>${filmResponse.results[0].opening_crawl} </p>`

        filmInfo2.innerHTML = 
            `<h2><strong>${filmResponse.results[1].title}</strong></h2>
            <p>${filmResponse.results[1].release_date} </p>
            <p> Director: ${filmResponse.results[1].director} </p>
            <p> Producers: ${filmResponse.results[1].producer} </p>
            <p>${filmResponse.results[1].opening_crawl} </p>`
        
        filmInfo3.innerHTML = 
            `<h2><strong>${filmResponse.results[2].title}</strong></h2>
            <p>${filmResponse.results[2].release_date} </p>
            <p> Director: ${filmResponse.results[2].director} </p>
            <p> Producers: ${filmResponse.results[2].producer} </p>
            <p>${filmResponse.results[2].opening_crawl} </p>`;

        filmInfo4.innerHTML = 
            `<h2><strong>${filmResponse.results[3].title}</strong></h2>
            <p>${filmResponse.results[3].release_date} </p>
            <p> Director: ${filmResponse.results[3].director} </p>
            <p> Producer: ${filmResponse.results[3].producer} </p>
            <p>${filmResponse.results[3].opening_crawl} </p>`;

        filmInfo5.innerHTML = 
            `<h2><strong>${filmResponse.results[4].title}</strong></h2>
            <p>${filmResponse.results[4].release_date} </p>
            <p> Director: ${filmResponse.results[4].director} </p>
            <p> Producer: ${filmResponse.results[4].producer} </p>
            <p>${filmResponse.results[4].opening_crawl} </p>`;

        filmInfo6.innerHTML = 
            `<h2><strong>${filmResponse.results[5].title}</strong></h2>
            <p>${filmResponse.results[5].release_date} </p>
            <p> Director: ${filmResponse.results[5].director} </p>
            <p> Producer: ${filmResponse.results[5].producer} </p>
            <p>${filmResponse.results[5].opening_crawl} </p>`;
        
    }
  } catch (error) {
    console.log(error);
  }

}

getFilm();



