const e="https://swapi.dev/api/",r=document.querySelector("#filmInfo1"),t=document.querySelector("#filmInfo2"),s=document.querySelector("#filmInfo3"),n=document.querySelector("#filmInfo4"),o=document.querySelector("#filmInfo5"),l=document.querySelector("#filmInfo6");!async function(){try{const p=await fetch(`${e}films`);if(p.ok){const e=await p.json();console.log(e),r.innerHTML=`<h2><strong>${e.results[0].title}</strong></h2>\n            <p>${e.results[0].release_date} </p>\n            <p> Director: ${e.results[0].director} </p>\n            <p> Producers: ${e.results[0].producer} </p>\n            <p>${e.results[0].opening_crawl} </p>`,t.innerHTML=`<h2><strong>${e.results[1].title}</strong></h2>\n            <p>${e.results[1].release_date} </p>\n            <p> Director: ${e.results[1].director} </p>\n            <p> Producers: ${e.results[1].producer} </p>\n            <p>${e.results[1].opening_crawl} </p>`,s.innerHTML=`<h2><strong>${e.results[2].title}</strong></h2>\n            <p>${e.results[2].release_date} </p>\n            <p> Director: ${e.results[2].director} </p>\n            <p> Producers: ${e.results[2].producer} </p>\n            <p>${e.results[2].opening_crawl} </p>`,n.innerHTML=`<h2><strong>${e.results[3].title}</strong></h2>\n            <p>${e.results[3].release_date} </p>\n            <p> Director: ${e.results[3].director} </p>\n            <p> Producer: ${e.results[3].producer} </p>\n            <p>${e.results[3].opening_crawl} </p>`,o.innerHTML=`<h2><strong>${e.results[4].title}</strong></h2>\n            <p>${e.results[4].release_date} </p>\n            <p> Director: ${e.results[4].director} </p>\n            <p> Producer: ${e.results[4].producer} </p>\n            <p>${e.results[4].opening_crawl} </p>`,l.innerHTML=`<h2><strong>${e.results[5].title}</strong></h2>\n            <p>${e.results[5].release_date} </p>\n            <p> Director: ${e.results[5].director} </p>\n            <p> Producer: ${e.results[5].producer} </p>\n            <p>${e.results[5].opening_crawl} </p>`}}catch(e){console.log(e)}}();
//# sourceMappingURL=films.23f64181.js.map