import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { destinationArray } from "../../static/destinationInformation";

import "./style.css";
import {
  Heading1,
  Heading4,
  Subheading1,
  Subheading2,
} from "../../Components/Headings";

const Destination = () => {
  const navigate = useNavigate();
  const { destinationID } = useParams();
  const [chosenDestination, setChosenDestination] = useState({
    found: true,
    data: null,
  });


  useEffect(() => {
    const currentElement = destinationArray.find(
      (item) => item.id === destinationID.toLowerCase()
    );
    if (currentElement) {
      setChosenDestination({
        found: true,
        data: {
          ...currentElement,
        },
      });
    } else {
      setChosenDestination({
        found: false,
        data: {},
      });
    }
  }, [destinationID]);

  useEffect(() => {
    if (!chosenDestination.found) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [chosenDestination, navigate]);

  console.log(chosenDestination);

  return (
    <section className="destination-page">
      {chosenDestination.found && !!chosenDestination.data ? (
        <div className="content-container">
          <div className="page-title">
            <span>01</span>
            <Heading4 text={"Pick your destination"} />
          </div>
          <div className="destination-content">
            <div className="image-container">
              <img src={`/${chosenDestination.data.id}.png`} alt="planet" />
            </div>
            <div className="text-container">
              <div className="destination-navigation-container">
                <Navigation destinationInformation={destinationArray} />
              </div>
              <div className="title-container">
                <Heading1 text={chosenDestination.data.title.toUpperCase()} />
              </div>
              <div className="description-container">
                {chosenDestination.data.description}
              </div>
              <div className="addition-info">
                <div className="info-container">
                  <Subheading2 text={"avg. distance"} />
                  <div className="info-detail">
                    <Subheading1 text={chosenDestination.data.distance} />
                  </div>
                </div>
                <div className="info-container">
                  <Subheading2 text={"Est. travel time"} />
                  <div className="info-detail">
                    <Subheading1 text={chosenDestination.data.travelTime} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="not-found"><Heading4 text={"page not found... redirecting to home page"}/></div>
      )}
    </section>
  );
};

export default Destination;
