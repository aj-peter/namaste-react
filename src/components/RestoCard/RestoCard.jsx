import { Dot, Star } from "lucide-react";
import { CLOUDINARY_URL } from "../../utils/constants";
import "./restocard.css";

const RestoCard = ({ name, rating, dTime, cuisines, imageId }) => (
  <div className="resto-card">
    <img
      className="resto-logo"
      src={CLOUDINARY_URL + imageId}
      alt="Something Went Wrong!!"
    />
    <div className="resto-title">{name}</div>
    <div className="resto-line-1">
      <Star className="rating-logo" color="#1bb91d" strokeWidth={3} size={20} />
      {rating}
      <Dot className="dot" strokeWidth={3} />
      {dTime}
    </div>
    <div className="resto-line-2">{cuisines}</div>
  </div>
);

export default RestoCard;
