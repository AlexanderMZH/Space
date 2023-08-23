import Header from "../Components/Header";
import Router from "../Router";
import "./style.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="header-container">
        <Header />
      </div>
      <div className="routing-container">
        <Router />
      </div>
    </div>
  );
};

export default Layout;
