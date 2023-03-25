import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function showForecast(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      <img
        src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`}
        alt={response.data.weather[0].description}
      />
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${temperature}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      showForecast(response);
      setSubmitted(true);
    });
  }

  function updateTemperature(event) {
    setTemperature(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        id="search-input"
        onChange={updateTemperature}
      />
      <button type="submit" id='search-btn'>Search</button>
      <button id="current-btn">Current</button>
    </form>
  );
  if (submitted) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} m/s</li>
          <li>{icon}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
