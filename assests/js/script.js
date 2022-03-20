var appId = "9397578e98a8fa54255fac8dbc564411";
var searchButton = document.querySelector(".btn");
var cityInput = document.querySelector("#city");
var currCity = document.querySelector("#current-city");

var getWeather = function () {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
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
          });
        }
      });
    });
};

var displayWeather = function (data) {
  var currTemp = document.querySelector("#current-temp");
  var currHumidity = document.querySelector("#current-humidity");
  var currWindSpeed = document.querySelector("#current-windspeed");
  var currUVIndex = document.querySelector("#uv-index");

  // icon

  // temp
  var currentTemprature = data.current.temp;
  currTemp.textContent = "Temprature: " + currentTemprature;

  // humidity
  var currentHumidity = data.current.humidity;
  console.log(currentHumidity);

  // windspeed
  var currentWindspeed = data.current.wind_speed;
  console.log(currentWindspeed);
  // uv index
  var currentUVI = data.current.uvi;
  console.log(currentUVI);

  var currentWeather = document.querySelector(".selected-city");
  Temp = document.createElement("p");
};

var citySearch = function () {
  cityName = cityInput.value;
  getWeather(cityName);
};

searchButton.addEventListener("click", citySearch);

//1. get data out onto page  via element creation - append
//2. report UV index that is color coded - conditional logic. if > ___ then style a certain color
//3. 200 get a response back from 5-day forecast - MULTIPLE ARRAYS put in logic for each data point needed, index selection
//4. convert data-time moment.js ? then format   or Data object but formatted correctly
//5. SEARCH HISTORY: add local storage - store name and do another API using that value
