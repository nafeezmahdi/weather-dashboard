import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";

export default function Page() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
