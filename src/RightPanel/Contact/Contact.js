import gitIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.svg";
import mailIcon from "../../images/mail.svg";

function Contact(props) {
  return (
    <div className="contact-section fixed-scroll" id="Contact">
      <div className="contact-header header-design">
        <div className="header-text">Contact</div>
      </div>
      <div className="contact-panel">
        <div className="contact-wrapper">
          <ul>
            <li>
              <div className="contact-icon">
                <img src={gitIcon} />
              </div>
              <div className="contact-details">
                <a href="https://github.com/yash-joshi9">
                  https://github.com/yash-joshi9
                </a>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <img src={linkedinIcon} />
              </div>
              <div className="contact-details">
                <a href="https://www.linkedin.com/in/yash-j">
                  https://www.linkedin.com/in/yash-j
                </a>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <img src={mailIcon} />
              </div>
              <div className="contact-details">yjoshi.2098@gmail.com</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
