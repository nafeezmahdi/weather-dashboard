/* eslint-disable react/prop-types */
import { WeatherContext } from "../context/contextIndex.js";
import useWeather from "../hooks/useWeather.js";

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather();
  // console.log(weatherData);
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}
