/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yash",
  title: "Hi all, I'm Yash",
  subTitle: emoji(
    "A passionate Fullstack Engineer 🚀 having an experience of building Web applications with JavaScript / NodeJs / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1czTgdaVSO7nvmWvXmiWS5XR92-snaYWZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yash-joshi9",
  linkedin: "https://www.linkedin.com/in/yash-j",
  gmail: "yjoshi.2098@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "CRAZY FULLSTACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ A software engineer having experience in building products for masses "
    ),
    emoji(`⚡ Believes in the "Hands-On Experience" approach`),
    emoji(
      `⚡ Interest in creating products and working with trending techs like creating Decentralized apps.`
    ),
    emoji(
      `⚡ Competitive programmer with a demonstrated history of solving problems in DSA.`
    ),
    emoji(`⚡ Keen Sportsman and passionate frontend developer.`)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Sql / Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/education.caed892b.svg"),
      subHeader: "Master's of Applied Computing",
      duration: "September 2020 - April 2022"
    },
    {
      schoolName: "V.V.P. Engineering College",
      logo: require("./assets/images/education.caed892b.svg"),
      subHeader: "Bachelor Of Engineering in Information Technology",
      duration: "September 2015 - April 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend",
      progressPercentage: "82%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Student",
      company: "BlackBerry, Canada",
      companylogo: require("./assets/images/BlackBerry-logo.jpg"),
      date: "Sept 2021 – April 2022",
      desc: "BlackBerry Limited is a Canadian software company specializing in cybersecurity. Originally known as Research In Motion, it developed the BlackBerry brand of interactive pagers, smartphones, and tablets.",
      descBullets: [
        "Worked on refactoring the Cloud Console application from Ruby on Rails to React and Golang.",
        "Developed UI forms using React, Redux, Ant Design, and TypeScript that enables BlackBerry users to request cluster resources.",
        "Restructured the React web app to allow for dynamic (w/o server restart/rebuild) loading of env configurations.",
        "Created charts and graphs to review and examine the history of patch fixes using Recharts library built on React and D3.js`"
      ]
    },
    {
      role: "Fullstack Developer",
      company: "Prolix Technikos (Troth Labs)",
      companylogo: require("./assets/images/prolix.png"),
      date: "Jan 2019 – July 2020",
      desc: "Prolix is dedicated to developing effective outsourcing partnerships with clients in order to accelerate time to market, reduce operational cost, and empower them to devote more time to their core business.",
      descBullets: [
        "Participated in development of multiple web applications which were based on React.js, PHP(Symfony MVC), MySQL and SCSS.",
        "Collaborated with peers to develop a large online meeting web application, enabling users to make meetings easier all around the world.",
        "Designed a Bookmark Manager web application which helps users to save bookmarks in an organized and attractive manner.",
        "Managed staging workflow with CI/CD tools like GIT (GitHub), JIRA and containerization using Docker while working under Agile environment.",
        "Contributed to building and integrating REST APIs.",
        "Build and deployed Cross Browser Extensions on Chrome and Mozilla web stores."
      ]
    }
  ]
};

/* Your Opn Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// Python – Udemy and Hackerrank
// Problem Solving (Basic and Intermediate) - Hackerrank
// JavaScript – Hackerrank
// Rest API (Intermediate) – Hackerrank
// MongoDB, Kafka, Spring, CouchDB – LinkedIn Learning

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Problem Solving (Intermediate)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/joshiyash9408661"
        }
      ]
    },
    {
      title: "JavaScript",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/yjoshi_2098"
        }
      ]
    },
    {
      title: "Rest API (Intermediate)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/yjoshi_2098"
        }
      ]
    },

    {
      title: "MongoDB, Kafka, Spring, CouchDB",
      image: require("./assets/images/linkedin.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/yash-j/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Dhvanit41/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Dhvanit41-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "yjoshi.2098@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
