import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

export default function Page() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}
