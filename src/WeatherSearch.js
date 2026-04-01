import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
    icon: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=a4adbd3ete0df14f5fa9050ddd7off63`;
    axios.get(apiUrl).then(showTemperature);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }

  function getAnimatedIcon(icon) {
    if (icon === "clear-sky-day") {
      return "CLEAR_DAY";
    }
    if (icon === "clear-sky-night") {
      return "CLEAR_NIGHT";
    }
    if (icon === "few-clouds-day") {
      return "PARTLY_CLOUDY_DAY";
    }
    if (icon === "few-clouds-night") {
      return "PARTLY_CLOUDY_NIGHT";
    }
    if (icon === "scattered-clouds-day") {
      return "PARTLY_CLOUDY_DAY";
    }
    if (icon === "scattered-clouds-night") {
      return "PARTLY_CLOUDY_NIGHT";
    }
    if (icon === "broken-clouds-day") {
      return "CLOUDY";
    }
    if (icon === "broken-clouds-night") {
      return "CLOUDY";
    }
    if (icon === "shower-rain-day") {
      return "RAIN";
    }
    if (icon === "shower-rain-night") {
      return "RAIN";
    }
    if (icon === "rain-day") {
      return "RAIN";
    }
    if (icon === "rain-night") {
      return "RAIN";
    }
    if (icon === "thunderstorm-day") {
      return "SLEET";
    }
    if (icon === "thunderstorm-night") {
      return "SLEET";
    }
    if (icon === "snow-day") {
      return "SNOW";
    }
    if (icon === "snow-night") {
      return "SNOW";
    }
    if (icon === "mist-day") {
      return "FOG";
    }
    if (icon === "mist-night") {
      return "FOG";
    }
    return "CLOUDY";
  }

  function getColor(icon) {
    if (icon.includes("night")) {
      return "darkblue";
    }
    if (icon === "clear-sky-day") {
      return "goldenrod";
    }
    if (icon === "few-clouds-day") {
      return "goldenrod";
    }
    return "gray";
  }

  function showResult() {
    if (weather.temperature) {
      let animatedIcon = getAnimatedIcon(weather.icon);
      let color = getColor(weather.icon);

      return (
        <ul>
          <li>
            <span>Temperature: {Math.round(weather.temperature)}°C</span>
          </li>
          <li>
            <span>Description: {weather.description}</span>
          </li>
          <li>
            <span>Humidity: {weather.humidity}%</span>
          </li>
          <li>
            <span>Wind: {weather.wind}km/h</span>
          </li>
          <li>
            <ReactAnimatedWeather
              icon={animatedIcon}
              color={color}
              size={50}
              animate={true}
            />
          </li>
        </ul>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="Wrapper">
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>

      <div className="Result">{showResult()}</div>
    </div>
  );
}
