import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyImage from "../assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

export function getBackgroundImage(climate) {
  switch (climate) {
    case "Rain":
      return RainyImage;
    case "Clouds":
      return ScatteredCloudsImage;
    case "Clear":
      return ClearSkyImage;
    case "Snow":
      return SnowImage;
    case "Thunder":
      return ThunderStormImage;
    case "Fog":
      return WinterImage;
    case "Haze":
      return FewCloudsImage;
    case "Mist":
      return MistImage;

    default:
      return ClearSkyImage;
  }
}
