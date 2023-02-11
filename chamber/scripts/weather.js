const key = "e8d95775b85ae4123aa15bbfb0ae42d1";
const locationQuery = "lat=41.836594&lon=-111.831303";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?${locationQuery}&units=imperial&appid=${key}`;

const fetchCurrentWeather = async () => {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const currentTemp = document.querySelector("#current-temp");
      const weatherIcon = document.querySelector("#weather-icon");
      const captionDesc = document.querySelector("figcaption");
      const data = await response.json();
      console.log(data);
      currentTemp.innerHTML = data.main.temp;
      currentTemp.innerHTML = Math.round(currentTemp.innerHTML);
      currentTemp.innerHTML += "°f";
      weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      captionDesc.innerHTML = data.weather[0].description;
      captionDesc.style.textTransform = "capitalize";
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

const threeDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?${locationQuery}&units=imperial&appid=${key}`;

const fetchThreeDayForecast = async () => {
  try {
    const response = await fetch(threeDayForecastUrl);
    const data = await response.json();
    const threeDayForecast = data.list
      .filter((item) => {
        return item.dt_txt.includes("18:00:00");
      })
      .splice(0, 3);

    return threeDayForecast;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const buildForecast = (data) => {
  const dayOne = {
    "day-one": document.querySelector("#day-one"),
    "day-one-temp": document.querySelector("#day-one-temp"),
    "day-one-date": document.querySelector("#day-one-date"),
  };
  const dayTwo = {
    "day-two": document.querySelector("#day-two"),
    "day-two-temp": document.querySelector("#day-two-temp"),
    "day-two-date": document.querySelector("#day-two-date"),
  };
  const dayThree = {
    "day-three": document.querySelector("#day-three"),
    "day-three-temp": document.querySelector("#day-three-temp"),
    "day-three-date": document.querySelector("#day-three-date"),
  };

  dayOne["day-one-date"].innerHTML = data[0].dt_txt.slice(5, 10);
  dayOne["day-one-temp"].innerHTML = Math.round(data[0].main.temp);
  dayOne["day-one-temp"].innerHTML += "°f";

  dayTwo["day-two-date"].innerHTML = data[1].dt_txt.slice(5, 10);
  dayTwo["day-two-temp"].innerHTML = Math.round(data[1].main.temp);
  dayTwo["day-two-temp"].innerHTML += "°f";

  dayThree["day-three-date"].innerHTML = data[2].dt_txt.slice(5, 10);
  dayThree["day-three-temp"].innerHTML = Math.round(data[2].main.temp);
  dayThree["day-three-temp"].innerHTML += "°f";
};

fetchCurrentWeather();
fetchThreeDayForecast().then((data) => {
  buildForecast(data);
});
