//const api = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=11134ebd-1dfd-4aec-ad3b-5eca0f12475d"
const main = document.querySelector("main")
const url = new URL(window.location)
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const movieHdr = document.querySelector(".movie")

console.log(queryString)
const episodeIdMap = {
    4: 1,
    5: 2,
    6: 3,
    1: 4,
    2: 5,
    3: 6,
}
const episodeId = queryParams.get("episode_id")
const filmId = episodeIdMap[episodeId]

fetch(`https://swapi.dev/api/films/${filmId}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const p = document.createElement("p")
        p.innerHTML = `
            <div class ="movie">
                <a href="movie.html?movie=movie-id-goes-here">${parsedResponse.title}</a>
                <time>${parsedResponse.release_date.substring(0, 4)}</time>
                <div class = "crawl" >${parsedResponse.opening_crawl}</div>
            </div>
            
            `
            movieHdr.append(p)

    })
fetch(`https://swapi.dev/api/films/${filmId}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        parsedResponse.characters.forEach(url => fetch(url).then(response => {
            return response.json()}
        ).then(parsedResponse => {
            const li = document.createElement("li")
            li.textContent = parsedResponse.name
            const ul = document.querySelector("ul")
            ul.append(li)
        }))
    })
fetch(`https://www.omdbapi.com?apikey=e57778af&t=a+new+hope`)