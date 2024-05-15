import { useContext, useState } from "react";
import SearchLogo from "../../assets/search.svg";
import { LocationContext } from "../../context/contextIndex.js";
import { getLocationByName } from "../../data/location-data.js";

export default function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  function handleSubmit(evnt) {
    evnt.preventDefault();
    // console.log(searchTerm);
    const fetchedLocation = getLocationByName(searchTerm);
    // console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={(evnt) => setSearchTerm(evnt.target.value)}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchLogo} />
        </button>
      </div>
    </form>
  );
}
