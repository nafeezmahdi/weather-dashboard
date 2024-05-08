import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

export default function Page() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}
