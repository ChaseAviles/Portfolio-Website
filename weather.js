class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    this.apiKey = "063a7c1c1506a30a092810d76e9caae6";
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
