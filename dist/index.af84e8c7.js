const e="https://swapi.dev/api/",o=document.querySelector("#submit"),n=document.querySelector("#responseField");let t=Math.floor(83*Math.random()+1);o.addEventListener("click",async function(){try{const o=await fetch(`${e}people/${t}/`);if(o.ok){const e=await o.json();n.innerHTML=`<text> <strong> ${e.name} </strong></text>\n          <p>Fun facts about you: </p>\n          <p>Height: ${e.height}cm</p>\n          <p>Mass: ${e.mass}kg</p>\n          <p>Hair color: ${e.hair_color}</p>\n          <p>Skin color: ${e.skin_color}</p>\n          <p>Eye color: ${e.eye_color}</p>\n          <p>Birth year: ${e.birth_year}</p>\n          <p>Gender: ${e.gender}</p`,console.log(e)}}catch(e){console.log(e.message)}}());
//# sourceMappingURL=index.af84e8c7.js.map