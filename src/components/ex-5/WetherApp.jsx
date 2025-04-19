import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // to store weather data
  const [error, setError] = useState(""); // to handle errors

  const searchWeatherHandler = async () => {
    if (!city) return; // Do nothing if the city is empty
    setError(""); // Reset any previous error messages

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a0cf72b1cb58358138c96c877c2e2df&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data); // store the data in the state
      } else {
        setError("City not found");
      }
    } catch (error) {
      setError("Error fetching weather data");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded-md w-full mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={searchWeatherHandler}
          className="bg-blue-500 text-white px-4 w-full py-2 rounded-md"
        >
          Search
        </button>

        {/* Display weather or error */}
        {weather && (
          <div className="mt-4">
            <h2 className="text-xl">{weather.name}, {weather.sys.country}</h2>
            <p className="text-lg">{weather.weather[0].description}</p>
            <p className="text-xl font-bold">{weather.main.temp}°C</p>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default WeatherApp;
