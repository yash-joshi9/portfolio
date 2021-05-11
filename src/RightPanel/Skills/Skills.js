import "./style.scss";
import htmlIcon from "../../images/html5.png";
import gitIcon from "../../images/github.png";
import reactIcon from "../../images/react.png";
import jsIcon from "../../images/javascript.png";
import mongoIcon from "../../images/mongodb.png";
import nodeIcon from "../../images/nodejs.png";
import sassIcon from "../../images/sass.png";
import jqyueryIcon from "../../images/jquery.png";
import cssIcon from "../../images/css3.png";
import es6Icon from "../../images/es6.jpeg";

import jsonIcon from "../../images/json.png";
import restapiIcon from "../../images/restapi.png";
import xmlIcon from "../../images/xml.png";

import phpIcon from "../../images/php.png";
import javaIcon from "../../images/java.png";
import pythonIcon from "../../images/python.png";
import expressIcon from "../../images/express.png";

import mysqlIcon from "../../images/mysql.png";
import mochaIcon from "../../images/mocha.png";
import junitIcon from "../../images/junit.png";
import jiraIcon from "../../images/jira.jpg";
import redmineIcon from "../../images/redmine.png";

const allSkills = [
  {
    skillSection: "Front End",
    skillTypes: [
      {
        skillname: "React.js",
        skillicon: reactIcon,
      },
      {
        skillname: "JavaScript",
        skillicon: jsIcon,
      },
      {
        skillname: "ES6",
        skillicon: es6Icon,
      },
      {
        skillname: "CSS",
        skillicon: cssIcon,
      },
      {
        skillname: "SCSS",
        skillicon: sassIcon,
      },
      {
        skillname: "JSON",
        skillicon: jsonIcon,
      },
      {
        skillname: "REST API",
        skillicon: restapiIcon,
      },
      {
        skillname: "JQuery",
        skillicon: jqyueryIcon,
      },
    ],
  },
  {
    skillSection: "Markup Languages",
    skillTypes: [
      { skillname: "XML", skillicon: xmlIcon },
      { skillname: "HTML5", skillicon: htmlIcon },
    ],
  },
  {
    skillSection: "Back End and Libraries",
    skillTypes: [
      { skillname: "Node.js", skillicon: nodeIcon },
      { skillname: "PHP(Symfony)", skillicon: phpIcon },
      { skillname: "Java", skillicon: javaIcon },
      { skillname: "Python", skillicon: pythonIcon },
      { skillname: "Express.js", skillicon: expressIcon },
    ],
  },
  {
    skillSection: "Database",
    skillTypes: [
      { skillname: "MySQL", skillicon: mysqlIcon },
      { skillname: "MongoDB", skillicon: mongoIcon },
    ],
  },
  {
    skillSection: "Testing",
    skillTypes: [
      { skillname: "Mocha", skillicon: mochaIcon },
      { skillname: "Junit", skillicon: junitIcon },
    ],
  },
  {
    skillSection: "Software Tools",
    skillTypes: [
      { skillname: "GIT", skillicon: gitIcon },
      { skillname: "Jira", skillicon: jiraIcon },
      { skillname: "Redmine", skillicon: redmineIcon },
    ],
  },
];

function Skills(props) {
  return (
    <div className="skills-section fixed-scroll" id="Skills">
      <div className="skills-header header-design">
        <div className="header-text">Skills</div>
      </div>

      <div className="skill-wrapper">
        {allSkills.map((item, key) => (
          <div className="skill-panel">
            <div className="skill-name">{item.skillSection}</div>

            <div className="skill-detail">
              {item.skillTypes.map((i, key2) => (
                <div className="particular-skill">
                  <div className="skill-icon">
                    <img src={i.skillicon} />
                  </div>
                  <div className="particular-skill-name">{i.skillname}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
