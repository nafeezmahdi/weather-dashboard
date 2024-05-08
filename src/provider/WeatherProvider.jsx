/* eslint-disable react/prop-types */
import { WeatherContext } from "../context/contextIndex";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}
