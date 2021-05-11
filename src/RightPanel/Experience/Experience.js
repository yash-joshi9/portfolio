function Experience(props) {
  return (
    <div className="experience-section fixed-scroll" id="Experience">
      <div className="experience-header header-design">
        <div className="header-text">Experience</div>
      </div>
      <div className="experience-panel">
        <div className="company-name">
          <div className="cname-header">Prolix Technikos (Troth Labs)</div>
          <div className="cname-role">Junior Full-Stack Developer</div>
        </div>
        <div className="company-role"></div>
        <div className="company-contribution">
          <ul>
            <li>
              Contributed to the development of 2 web applications based on
              React.js, PHP(Symfony), MySQL and SCSS.
            </li>
            <li>
              Integrated APIs, developed Cross-browser extension and managed
              staging database.
            </li>
            <li>Worked in Jira, Git and agile framework.</li>
          </ul>
        </div>
        <div className="company-date">Jan 2019 – July 2020 | Rajkot, India</div>
      </div>
    </div>
  );
}

export default Experience;
