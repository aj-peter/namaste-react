import { ChevronDown } from "lucide-react";
import { LOGO_URL } from "../../utils/constants";

const HeaderLeft = () => (
  <div className="header-left">
    <img className="logo" src={LOGO_URL} />
    <span className="location">Other</span>
    <ChevronDown className="down-arrow" size={20} color="#fc8019" />
  </div>
);

export default HeaderLeft;
