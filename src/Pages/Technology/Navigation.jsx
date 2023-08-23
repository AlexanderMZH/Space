import { NavLink } from "react-router-dom"

const Navigation =({technologyArray}) => {


    return(
        <nav>
            <ul className="tech-nav-ul">
                {technologyArray.map((item) => {
                    return(
                        <li key={item.id}>
                            <NavLink key={item.id} to={`/technology/${item.id}`} className={"tech-nav"}>
                            <div className="tech-nav-number">
                                <span>{item.pageNum}</span>
                            </div>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            
        </nav>

    )
}

export default Navigation