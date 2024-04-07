import { ResCard } from "./ResCard.js";
import { resList } from "../utils/mockData.js";

let index = 0;

export function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => {
          return <ResCard resData={res} key={index++} />;
        })}
      </div>
    </div>
  );
}

export default Body;
// ! We can do both the named export and default export it will work
