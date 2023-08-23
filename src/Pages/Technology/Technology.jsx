import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import {technologyArray} from "../../static/technologyInformation"

import "./style.css";
import {

  Heading3,
  Heading4,
  Subheading2,
} from "../../Components/Headings";

const Technology = () => {
  const navigate = useNavigate();
  const {technologyID}  = useParams();
  const [chosenTechnology, setChosenTechnology] = useState({
    found: true,
    data: "this is data",
  });

  useEffect(() => {
    const currentElement = technologyArray.find(
      (item) => item.id === technologyID
    );
    if (currentElement) {
      setChosenTechnology({
        found: true,
        data: {
          ...currentElement,
        },
      });
    } else {
      setChosenTechnology({
        found: false,
        data: {},
      });
    }
  }, [technologyID]);

  useEffect(() => {
    if (!chosenTechnology.found) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [chosenTechnology, navigate]);

  return (
    <section className="tech-page">
     {chosenTechnology.found && !!chosenTechnology.data ?(
      <div className="tech-container">
        <div className="page-title">
          <span>03</span>
          <Heading4 text={"SPACE LAUNCH 101"} />
        </div>

          <div className="tech-content">

            <div className="tech-nav-container">
              <Navigation  
                technologyArray = {technologyArray}
              />
            </div>

            <div className="tech-description-container">
              <div className="terminology">
                <p>"THE TERMINOLOGY…"</p>
              </div>
              <div className="vehicle" style={{marginTop:"10px"}}>
                <Heading3 text={chosenTechnology.data.terminology}/>
              </div>
              <div className="description-container" style={{border:"none",width:"60%",marginTop:"3%"}}>
                {chosenTechnology.data.description}
              </div>
            </div>

          </div>
          <div className="tech-image">
              <img src={`/${chosenTechnology.data.id}.png`} alt="" />
          </div>
      </div>
     ) : (
      <div className="not-found">
        <Heading4 text={"page not found... redirecting to home page!"}/>
      </div>
     )}
    </section>
  )
};

export default Technology;
