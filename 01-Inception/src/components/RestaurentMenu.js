import { useEffect, useState } from "react";

const RestarentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=659668&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };
  return (
    <div className="menu">
      <h1>Name of the Resto</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>coke</li>
      </ul>
    </div>
  );
};

export { RestarentMenu };
