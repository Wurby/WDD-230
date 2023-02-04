const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const key = "e8d95775b85ae4123aa15bbfb0ae42d1";
const locationQuery = "lat=41.836594&lon=-111.831303";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?${locationQuery}&units=imperial&appid=${key}`;

const apiFetch = async () => {
  try {
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
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetch();
