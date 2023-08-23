import { Route, Routes } from "react-router-dom"
import Crew from "../Pages/Crew"

const CrewRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path=":crewID" element={<Crew/>}/>
            </Routes>
        </div>
    )
}
export default CrewRoutes