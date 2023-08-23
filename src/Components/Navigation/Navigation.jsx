import { NavLink } from "react-router-dom";
import "./style.css";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-ul">
        <li className="navigation-li">
          <NavLink className={"nav-link"} to={"/"}>
            <div className="navigation-item-container">
              <span className="navigation-number">00</span>
              <span className="navigation-text">Home</span>
            </div>
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink className={"nav-link"} to={"/destination/moon"}>
            <div className="navigation-item-container">
              <span className="navigation-number">01</span>
              <span className="navigation-text">Destination</span>
            </div>
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink className={"nav-link"} to={"/crew/commander"}>
            <div className="navigation-item-container">
              <span className="navigation-number">02</span>
              <span className="navigation-text">Crew</span>
            </div>
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink className={"nav-link"} to={"/technology/vehicle"}>
            <div className="navigation-item-container">
              <span className="navigation-number">03</span>
              <span className="navigation-text">Technology</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
