const api = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=11134ebd-1dfd-4aec-ad3b-5eca0f12475d"
const url = new URL(window.location)
const queryString = window.location.search 
console.log(queryString)
fetch(`https://swapi.dev/api/films/${queryString}`).then(response => {
    return response.json()
}).then(parsedResponse => console.log(parsedResponse))

    //console.log(response.json())