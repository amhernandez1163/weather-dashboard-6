var appId = "9397578e98a8fa54255fac8dbc564411";
var searchButton = document.querySelector(".button");
var cityInput = document.querySelector("#city");
var currCity = document.querySelector("#current-city");
var cityName = cityInput.value;

var getWeather = function () {
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      cityName +
      "&appid=" +
      appId
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var latitude = data[0].lat;
      var longitude = data[0].lon;
      return [latitude, longitude];
    })
    .then(function (value) {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          value[0] +
          "&lon=" +
          value[1] +
          "&units=imperial" +
          "&appid=" +
          appId
      ).then(function (response) {
        //response successful
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            displayWeather(data);
            displayForecastDayOne(data);
            displayForecastDayTwo(data);
            displayForecastDayThree(data);
            displayForecastDayFour(data);
            displayForecastDayFive(data);
          });
        }
      });
    });
};

var displayWeather = function (data) {
  //current city
  var cityDisplay = cityInput.value;
  document.getElementById("current-city").textContent = cityDisplay;
  // date
  var addDate = moment().format("MMMM Do YYYY");
  document.getElementById("date").textContent = addDate;
  // icon

  // temp
  var currentTemprature = data.current.temp;
  document.getElementById("current-temp").textContent =
    "Temprature: " + currentTemprature;

  // humidity
  var currentHumidity = data.current.humidity;
  document.getElementById("current-humidity").textContent =
    "Humidity: " + currentHumidity + "%";

  // windspeed
  var currentWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed").textContent =
    "Wind Speed: " + currentWindspeed;

  // uv index
  var currentUVI = data.current.uvi;
  document.getElementById("uv-index").textContent = "UV Index: " + currentUVI;
};

//5-Day Forecast
var displayForecastDayOne = function (data) {
  // date
  var DayOne = moment().add(1, "days").format("MMMM Do");
  document.getElementById("date1").textContent = DayOne;
  // icon

  // temp
  var dayOneTemp = data.current.temp;
  document.getElementById("current-temp1").textContent =
    "Temprature: " + dayOneTemp;

  // humidity
  var dayOneHumidity = data.current.humidity;
  document.getElementById("current-humidity1").textContent =
    "Humidity: " + dayOneHumidity + "%";

  // windspeed
  var dayOneWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed1").textContent =
    "Wind Speed: " + dayOneWindspeed;
};

var displayForecastDayTwo = function (data) {
  // date
  var DayTwo = moment().add(2, "days").format("MMMM Do");
  document.getElementById("date2").textContent = DayTwo;
  // icon

  // temp
  var dayTwoTemp = data.current.temp;
  document.getElementById("current-temp2").textContent =
    "Temprature: " + dayTwoTemp;

  // humidity
  var dayTwoHumidity = data.current.humidity;
  document.getElementById("current-humidity2").textContent =
    "Humidity: " + dayTwoHumidity + "%";

  // windspeed
  var dayTwoWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed2").textContent =
    "Wind Speed: " + dayTwoWindspeed;
};

var displayForecastDayThree = function (data) {
  // date
  var DayThree = moment().add(3, "days").format("MMMM Do");
  document.getElementById("date3").textContent = DayThree;
  // icon

  // temp
  var dayThreeTemp = data.current.temp;
  document.getElementById("current-temp3").textContent =
    "Temprature: " + dayThreeTemp;

  // humidity
  var dayThreeHumidity = data.current.humidity;
  document.getElementById("current-humidity3").textContent =
    "Humidity: " + dayThreeHumidity + "%";

  // windspeed
  var dayThreeWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed3").textContent =
    "Wind Speed: " + dayThreeWindspeed;
};

var displayForecastDayFour = function (data) {
  // date
  var DayFour = moment().add(4, "days").format("MMMM Do");
  document.getElementById("date4").textContent = DayFour;
  // icon

  // temp
  var dayFourTemp = data.current.temp;
  document.getElementById("current-temp4").textContent =
    "Temprature: " + dayFourTemp;

  // humidity
  var dayFourHumidity = data.current.humidity;
  document.getElementById("current-humidity4").textContent =
    "Humidity: " + dayFourHumidity + "%";

  // windspeed
  var dayFourWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed4").textContent =
    "Wind Speed: " + dayFourWindspeed;
};

var displayForecastDayFive = function (data) {
  // date
  var DayFive = moment().add(5, "days").format("MMMM Do");
  document.getElementById("date5").textContent = DayFive;
  // icon

  // temp
  var dayFiveTemp = data.current.temp;
  document.getElementById("current-temp5").textContent =
    "Temprature: " + dayFiveTemp;

  // humidity
  var dayFiveHumidity = data.current.humidity;
  document.getElementById("current-humidity5").textContent =
    "Humidity: " + dayFiveHumidity + "%";

  // windspeed
  var dayFiveWindspeed = data.current.wind_speed;
  document.getElementById("current-windspeed5").textContent =
    "Wind Speed: " + dayFiveWindspeed;
};

// Getting city input
var citySearch = function () {
  cityName = cityInput.value;
  getWeather(cityName);
};

// setting local storage
localStorage.setItem("city", cityInput.value);

// Event Listener for click to kick off city search function
searchButton.addEventListener("click", citySearch);

//To Do:
//1. report UV index that is color coded - conditional logic. if > ___ then style a certain color
//2. SEARCH HISTORY: add local storage - store name and do another API using that value
