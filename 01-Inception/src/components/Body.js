import { ResCard } from "./ResCard.js";
import { resList } from "../utils/mockData.js";
import { useState } from "react";

let index = 0;

export function Body() {
  const [listOfResto, setListOfResto] = useState(resList);

  function applyFilter() {
    const filteredList = resList.filter((res) => {
      return res.info.avgRating >= 4;
    });
    setListOfResto(filteredList);
  }

  return (
    <div className="body">
      <div className="filter">
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
