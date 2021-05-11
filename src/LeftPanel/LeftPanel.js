import "./styles.scss";
import yashImg from "../images/me.jpg";

import skillIcon from "../images/skill.svg";
import educationIcon from "../images/education.svg";
import aboutIcon from "../images/about.svg";
import expIcon from "../images/exp.svg";
import contactIcon from "../images/contact.svg";

const NameArr = ["About", "Experience", "Skills", "Contact"];
const iconArr = [aboutIcon, expIcon, skillIcon, contactIcon];

function LeftPanel(props) {


  const handleClick = (item) => {
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="left-section">
      <div className="name-img-wrapper">
        <div className="image-wapper">
          <img src={yashImg} />
        </div>
        <div className="name-tag">Full Stack developer</div>
      </div>

      <div className="info-section">
        {NameArr.map((item, key) => (
          <div className="tags-info" key={key} onClick={() => handleClick(item)}>
            <div className="tag-img">
              <img src={iconArr[key]} />
            </div>
            <div className="tag-name-info">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftPanel;
