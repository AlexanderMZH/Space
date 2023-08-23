import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import CrewRoutes from "./CrewRoutes";
import DestinationRouter from "./DestinationRoutes";
import TechnologyRoutes from "./TechnologyRoutes"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/*" element={<DestinationRouter />} />
      <Route path="/crew/*" element={<CrewRoutes />} />
      <Route path="/technology/*" element={<TechnologyRoutes />} />
    </Routes>
  );
};

export default Router;
