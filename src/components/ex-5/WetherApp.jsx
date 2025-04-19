import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // to store weather data
  const [error, setError] = useState(""); // to handle errors
  const [suggestions, setSuggestions] = useState([]); // to store city suggestions
  const [selectedIndex, setSelectedIndex] = useState(null); // to track the selected suggestion index

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

  const fetchCitySuggestions = async (query) => {
    if (!query) {
      setSuggestions([]); // Clear suggestions if query is empty
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=7a0cf72b1cb58358138c96c877c2e2df`
      );
      const data = await res.json();
      setSuggestions(data.list || []); // Update suggestions
    } catch (error) {
      console.error("Error fetching city suggestions", error);
    }
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    fetchCitySuggestions(value); // Fetch city suggestions when typing
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name); // Set the input to the selected city
    searchWeatherHandler(); // Automatically search the weather for the selected city
    setSuggestions([]); // Clear the suggestions list after selection
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      // Move down in the suggestions list
      if (selectedIndex === null || selectedIndex === suggestions.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      // Move up in the suggestions list
      if (selectedIndex === null || selectedIndex === 0) {
        setSelectedIndex(suggestions.length - 1);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (e.key === "Enter" && selectedIndex !== null) {
      // Select a suggestion on Enter key press
      handleSuggestionClick(suggestions[selectedIndex]);
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
          onChange={handleCityChange}
          onKeyDown={handleKeyDown} // Handle keyboard navigation
        />
        <button
          onClick={searchWeatherHandler}
          className="bg-blue-500 text-white px-4 w-full py-2 rounded-md"
        >
          Search
        </button>

        {/* Display city suggestions */}
        {suggestions.length > 0 && (
          <ul className="bg-white shadow-lg rounded-md mt-2 w-full max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${
                  selectedIndex === index ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion)} // Trigger search when suggestion is clicked
              >
                {suggestion.name}, {suggestion.sys.country}
              </li>
            ))}
          </ul>
        )}

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
