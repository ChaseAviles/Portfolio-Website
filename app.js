const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();


//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const newCity = document.getElementById('city').value;
    const newState = document.getElementById('state').value;

    weather.changeLocation(newCity, newState);

    storage.setLocationData(newCity, newState);

    getWeather();

    $('#locModal').modal('hide');

})



function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.display(results);
        })
        .catch(err => console.log(err));
}
