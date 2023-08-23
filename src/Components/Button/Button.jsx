import { Heading4 } from "../Headings";
import "./style.css";
const Button = ({ text, onclick }) => {
  return (
    <button type="button" onClick={onclick} className="main-button">
      <Heading4 text={text} />
    </button>
  );
};

export default Button;
