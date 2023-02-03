const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const weatherTitle = document.querySelector("#weather-title");

const key = "e8d95775b85ae4123aa15bbfb0ae42d1";

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

const showPosition = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const locationQuery = `lat=${lat}&lon=${lon}`;
  console.log(locationQuery);
  getWeather(locationQuery);
};

const getWeather = async (position) => {
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?${position}&units=imperial&appid=${key}`;
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      currentTemp.innerHTML = data.main.temp;
      currentTemp.innerHTML = Math.round(currentTemp.innerHTML);
      currentTemp.innerHTML += "°f";
      weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      captionDesc.innerHTML = data.weather[0].description;
      captionDesc.style.textTransform = "capitalize";
      weatherTitle.innerHTML = `Weather in ${data.name}`;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
    currentTemp.innerHTML = "Error";
    weatherIcon.display = "none";
    captionDesc.innerHTML = "There was an error retrieving the weather.";
  }
};

getLocation();
