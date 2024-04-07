import { CDN_URL } from "../utils/config.js";

function ResCard({ resData }) {
  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card" key={id}>
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{`${cuisines[0]}${cuisines[1]}`}</h4>
      <h4>{avgRating}</h4>
      <h3>{`${sla.deliveryTime} mins`}</h3>
    </div>
  );
}
export { ResCard };
