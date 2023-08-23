import { NavLink } from "react-router-dom";
import { Heading3 } from "../../Components/Headings";

const Navigation = ({ crewInformation }) => {
  return (
    !!crewInformation && (
      <nav className="crew-navigation">
        <ul className="dots-ul">
          {crewInformation.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  className="crew-nav"
                  to={`/crew/${item.id}`}
                >
                  <div className="dot">
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    )
  );
};

export default Navigation;