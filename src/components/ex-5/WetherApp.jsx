import React, { useState } from "react";

const WeatherApp = () => {

  const [city, setCity] = useState("");
  const searchWeatherHandeler = async () => {
    
  }
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
        <button className="bg-blue-500 text-white px-4 w-full py-2 rounded-md">search</button>
      </div>
    </div>
  );
};

export default WeatherApp;
