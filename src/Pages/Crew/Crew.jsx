import { useEffect,useState } from "react"

import { useParams, useNavigate } from "react-router-dom";

import Navigation from "./Navigation"
import { crewArray } from "../../static/crewInformation"

import { Heading1, Heading3, Heading4, Heading5, Subheading2} from "../../Components/Headings"

import "./style.css"


const Crew = () => {
    const navigate = useNavigate();
    const { crewID } = useParams();
    const [choesenCrew, setChosenCrew] = useState({
      found: true,
      data: null,
    });

    useEffect(() => {
        // const currentElement = crewArray.find((item) => {
        //     item.id === crewID.toLowerCase()
        // })
        
        const currentElement = crewArray.find(
            (item) => item.id === crewID.toLowerCase()
          );

        if(currentElement){
            setChosenCrew({
                found:true,
                data: {
                    ...currentElement
                }
            })
        }else{
            setChosenCrew({
                found:false,
                data: {}
            })
        }
    },[crewID])

    useEffect(() => {
        if(!choesenCrew.found){
            setTimeout(() => {
                navigate("/");
            },2000)
        }
    },[choesenCrew,navigate])


    return (
    <section className="crew-page">
        {choesenCrew.found && !!choesenCrew.data ? (
        <div className="crew-content">
            <div className="page-title" >
                <span>02</span>
                <Heading4 text={"Meet your crew"}/>
            </div>
            <div className="crew-description">
                <div className="position" >
                    <Heading4 text={choesenCrew.data.position} />
                </div>
                <div>
                    <Heading3 text={choesenCrew.data.name} />
                </div>
                <div className="description-container" style={{border:"none",width:"60%",marginTop:"3%"}}>
                    {choesenCrew.data.description}
                </div>
            </div>
            <div className="crew-nav-container active">
                <Navigation crewInformation={crewArray}/>
            </div>
            <div className="crew-image">
                <img src={`/${choesenCrew.data.id}.png`} alt="" />
            </div>
            </div>
        ) : (<div className="not-found">
            <Heading4 text={"page not found... redirecting to home page!"}/>
        </div>) }
        
    </section>
    )
}

export default Crew