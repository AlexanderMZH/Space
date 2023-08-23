import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Heading1, Heading5 } from "../../Components/Headings";
import "./style.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home-page">
      <div className="content-container">
        <div className="text-data-container">
          <div className="subheading-container">
            <Heading5 text={"SO, YOU WANT TO TRAVEL TO"} />
          </div>
          <div className="main-heading-container">
            <Heading1 text={"SPACE"} />
          </div>
          <div className="body-text-container">
            <p className="body-text">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="button-container">
          <Button
            text={"explore"}
            onclick={() => {
              navigate("/destination/moon");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
