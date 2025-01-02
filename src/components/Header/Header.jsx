import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import "./header.css";

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <HeaderLeft />
      <HeaderRight />
    </div>
  </div>
);

export default Header;
