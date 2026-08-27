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
    const apiURL = ``;
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