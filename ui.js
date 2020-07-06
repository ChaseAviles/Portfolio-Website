class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.condition = document.getElementById("w-condition");
    this.temp = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.tempHigh = document.getElementById("w-temp-high");
    this.tempLow = document.getElementById("w-temp-low");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  display(weather) {
    this.location.textContent = `${weather.name}`;
    this.condition.textContent = weather.weather[0].description;
    this.temp.textContent = kelvinToF(weather.main.temp).toFixed(1) + " \u00B0" + "F";
    this.tempHigh.textContent = "High: " + kelvinToF(weather.main.temp_max).toFixed(1) + " \u00B0" + "F";
    this.tempLow.textContent = "Low: " + kelvinToF(weather.main.temp_min).toFixed(1) + " \u00B0" + "F";
    this.humidity.textContent = "Humidity: " + weather.main.humidity + "%";
    this.feelsLike.textContent = "Feels like: " + kelvinToF(weather.main.feels_like).toFixed(1) + " \u00B0" + "F";
    this.wind.textContent = "Wind speed: " + weather.wind.speed + " mph";

    //Weather icon logic
    if (this.condition.textContent === "scattered clouds") {
      this.icon.setAttribute("src", "images/clouds.svg");
    } else if (this.condition.textContent === "clear sky") {
      this.icon.setAttribute("src", "images/sun.svg");
    } else if (this.condition.textContent === "few clouds") {
      this.icon.setAttribute("src", "/images/partlycloudy.svg");
    } else if (this.condition.textContent === "broken clouds") {
      this.icon.setAttribute("src", "images/partlycloudy.svg");
    } else if (this.condition.textContent === "shower rain") {
      this.icon.setAttribute("src", "images/rain.svg");
    } else if (this.condition.textContent === "rain") {
      this.icon.setAttribute("src", "images/rain.svg");
    } else if (this.condition.textContent === "thunderstorm") {
      this.icon.setAttribute("src", "images/thunderstorm.svg");
    } else if (this.condition.textContent === "snow") {
      this.icon.setAttribute("src", "images/snow.svg");
    } else {
      this.icon.setAttribute("src", "images/fog.svg");
    }
  }
}

function kelvinToF(kelvin) {
  temp = (kelvin - 273.15) * 1.8 + 32;
  return temp;
}
