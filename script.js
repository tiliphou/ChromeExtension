async function fetchData() {
    fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/grostarreer?api_key=RGAPI-654dad77-dc74-4ca4-af08-6516b3b274de') // Specify the URL or endpoint you want to fetch
    .then(response => {
        // Check if the response was successful (status code 2xx)
        if (response.ok) {
        return response.json(); // Parse the response body as JSON
        } else {
        throw new Error('Request failed with status: ' + response.status);
        
        }
    })
    .then(data => {
        // Process the retrieved data
        document.getElementById("date").innerHTML=data["name"];
        document.getElementById("areaName").innerHTML=data["summonerLevel"];
        
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
    fetch('https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/8QgCdZB9XXx_IBLWBURj9ebp6WD3kqNQCBxrDZ9u7hXn1k8?api_key=RGAPI-654dad77-dc74-4ca4-af08-6516b3b274de')
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('Resquest failed with status: ' + response.status);
        }
    })
    .then(data => {
        console.log(data["0"]["tier"]);
        document.getElementById("latestBy").innerHTML=data["0"]["tier"] + " " + data["0"]["rank"];
        document.getElementById("deathNew").innerHTML=data["0"]["leaguePoints"] ;
    })
    
}
fetchData();