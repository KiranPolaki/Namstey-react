import { ResCard } from "./ResCard.js";
import { resList } from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { Shimmer } from "./ShimmerUi.js";

let index = 0;

const testList = [];

export function Body() {
  // const [listOfResto, setListOfResto] = useState(testList);
  const [listOfResto, setListOfResto] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [jsonData, setJsonData] = useState();

  function applyFilter() {
    const filteredList = resList.filter((res) => {
      return res.info.avgRating >= 4;
    });
    setListOfResto(filteredList);
  }

  useEffect(() => {
    fetchSwiggy();
  }, []);
  async function fetchSwiggy() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4360623&lng=78.3689349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    console.log(json.data.cards?.[2]?.card?.card?.gridElements, "card");

    // console.log(json.data, "json data ");
    // setJsonData(json.data);

    // jsonData.map((j) => {
    //   console.lobg(j);
    // });
  }

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
          <button className="search-btn">search</button>
        </div>
        <button className="filter-btn" onClick={applyFilter}>
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfResto.map((res) => {
          return <ResCard resData={res} key={index++} />;
        })}
      </div>
    </div>
  );
}

export default Body;
// ! We can do both the named export and default export it will work
