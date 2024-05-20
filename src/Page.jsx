import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import { WeatherContext } from "./context/contextIndex";
import { getBackgroundImage } from "./utils/getBackgroundImage";
import Footer from "./components/Footer";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState();

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-12 mt-14 mx-auto ">
          <p className=" text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url("${climateImage}")` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
