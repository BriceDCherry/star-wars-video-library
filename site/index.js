const main = document.querySelector("main");
const ul = document.createElement("ul");
main.append(ul)

fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((parsedResponse) => {
        const filmList = parsedResponse.results.map(movie => movie.title)
        return filmList.forEach(film =>{
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.href = "#"
            a.textContent = film
            li.append(a)
            ul.append(li)
         })   
     })

