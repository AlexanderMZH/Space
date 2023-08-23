import { NavLink } from "react-router-dom";

const Navigation = ({ destinationInformation }) => {
  return (
    !!destinationInformation && (
      <nav className="destination-navigation">
        <ul>
          {destinationInformation.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  className="destination-nav-link"
                  to={`/destination/${item.id}`}
                >
                  {item.title}
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
