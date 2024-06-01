import { ResCard } from "./ResCard.js";
import { resList } from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { Shimmer } from "./ShimmerUi.js";

let index = 0;

function Body() {
  const [listOfResto, setListOfResto] = useState([]);

  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");

  function applyFilter() {
    const filteredList = resList.filter((res) => {
      return res.info.avgRating >= 4;
    });
    setListOfResto(filteredList);
  }

  async function fetchSwiggy() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4360623&lng=78.3689349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    setListOfResto(
      json.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResto(
      json.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "card"
    );
  }

  function handleSearch() {
    console.log(searchText);
    // if (searchText === "") {
    //   setFilteredResto(listOfResto);
    //   return;
    // }
    const searchedResto = listOfResto.filter((resto) =>
      resto?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    //setListOfResto(searchedResto);
    setFilteredResto(searchedResto);
  }

  useEffect(() => {
    fetchSwiggy();
  }, []);

  return listOfResto.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            search
          </button>
        </div>
        <button className="filter-btn" onClick={applyFilter}>
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResto.map((res) => {
          return <ResCard resData={res} key={index++} />;
        })}
      </div>
    </div>
  );
}

export { Body };
// ! We can do both the named export and default export it will work
