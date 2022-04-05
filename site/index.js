const main = document.querySelector("main");
const ul = document.createElement("ul");
main.append(ul)

fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((response) => {
        const filmList = response.results;
        const httpRequests = filmList
            .map(film => film.url)
            .map(url => {
                return fetch(url).then(response => response.json())
            })
        const result = Promise.all(httpRequests)
        console.log(result)
        result.movie.map(result => result.title)
    })