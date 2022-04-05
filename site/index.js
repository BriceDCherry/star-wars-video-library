const main = document.querySelector("main");
const ul = document.querySelector("ul");
main.append(ul)

fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((parsedResponse) => {
        console.log(parsedResponse.results)
        const filmList = parsedResponse.results.forEach(film =>{ 
            const li = document.createElement("li")
            li.innerHTML = `
                <a href="movie.html?${film.episode_id}">${film.title}</a> 

            `
            ul.append(li)
         })   
     })

