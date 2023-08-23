import { useNavigate } from "react-router-dom";

import Navigation from "../Navigation";
import logoSrc from "../../assets/images/logo.png";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo-container">
        <img src={logoSrc} alt="logo" onClick={() => {navigate("/")}}/>
      </div>
      <div className="navigation-outer-container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
