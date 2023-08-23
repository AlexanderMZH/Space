import { Routes, Route } from "react-router-dom";
import Destination from "../Pages/Destination";

const DestinationRouter = () => {
  return (
    <Routes>
      <Route path=":destinationID" element={<Destination />} />
    </Routes>
  );
};

export default DestinationRouter;
