import { useContext } from "react";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context/contextIndex.js";
import { getFormattedDayInfo } from "../../utils/getFormattedDayInfo.js";
import { getWeatherIcon } from "../../utils/getWeatherIcon.js";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDayInfo(time, "time", false)} -{" "}
        {getFormattedDayInfo(time, "date", false)}
      </p>
    </div>
  );
}
