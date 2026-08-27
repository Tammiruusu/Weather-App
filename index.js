//Weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }catch(error){
            console.log(error);
            displayError(error);
        }
    } else {
        displayError("Kirjoita kaupunki")
    }

}); 

async function getWeatherData(city) {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    console.log(response);

    if(!response.ok){
        throw new Error("Kaupunkia ei voitu hakea");
    }

    return await response.json();

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}