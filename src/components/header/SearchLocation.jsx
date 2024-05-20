import { useContext, useState } from "react";
import SearchLogo from "../../assets/search.svg";
import { LocationContext } from "../../context/contextIndex.js";
import { getLocationByName } from "../../data/location-data.js";
import useDebounce from "../../hooks/useDebounce.js";

export default function SearchLocation() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    // console.log(term);
    const fetchedLocation = getLocationByName(term);
    // console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);
  function handleChange(evnt) {
    const value = evnt.target.value;
    setSearchTerm(value);
    doSearch(value);
  }

  function handleClick(value) {
    setSearchTerm(value);
    doSearch(value);
  }

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search Location"
          required
        />
        <button onClick={() => handleClick(searchTerm)}>
          <img src={SearchLogo} />
        </button>
      </div>
    </form>
  );
}
