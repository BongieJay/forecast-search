import react from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <main>
      <div class="weather-app-data">
        <div>
          <h1 class="weather-app-city" id="city"></h1>
          <p class="weather-app-details">
            <span id="time"></span>,<span id="description"></span>
            <br />
            Humidity: <strong id="humidity"></strong>, Wind:
            <strong id="wind-speed"></strong>
          </p>
        </div>
        <div class="weather-app-temperature-container">
          <div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              class="weather-app-icon"
            />
          </div>
          <div class="weather-app-temperature" id="temperature"></div>
          <div class="weather-app-unit">°C</div>
        </div>
      </div>
      <div class="weather-app-forecast" id="forecast"></div>
    </main>
  );
}
