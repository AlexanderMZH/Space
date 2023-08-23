import { Routes, Route } from "react-router-dom"
import Technology from "../Pages/Technology"

const TechnologyRoutes = () => {

    return(
        <Routes>
            <Route  path=":technologyID" element={<Technology/>} />
        </Routes>
    )
}

export default TechnologyRoutes