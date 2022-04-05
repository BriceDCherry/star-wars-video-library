//const api = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=11134ebd-1dfd-4aec-ad3b-5eca0f12475d"
const main = document.querySelector("main")
const url = new URL(window.location)
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)

console.log(queryString)

fetch(`https://swapi.dev/api/films/${queryParams.get("episode_id")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
            const p = document.createElement("p")
            p.textContent = parsedResponse.title
            main.append(p)
            
    })

    //console.log(response.json())