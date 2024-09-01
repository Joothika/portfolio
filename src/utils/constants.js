import HOMEICON from "../assets/home-icon.png";
import SKILLSICON from "../assets/skills-icon.png";
import PROJECTICON from "../assets/project-icon.png";
import CERTIFICATIONICON from "../assets/certify-icon.png";
import ABOUTICON from "../assets/about-icon.png";
import CONTACTICON from "../assets/contact-icon.png";
import GITHUBICON from "../assets/github-icon.png";
import LINKEDINICON from "../assets/linkedin-icon.png";
import ARROWICON from "../assets/arrow-icon.png";
import PROJECTEXPLORE from "../assets/explore-project.png";
import HTMLICON from "../assets/skills/html-icon.png";
import CSSICON from "../assets/skills/css-icon.png";
import BSICON from "../assets/skills/bootstrap-icon.png";
import TAILWINDICON from "../assets/skills/tailwindcss-icon.png";
import JSICON from "../assets/skills/js-icon.png";
import REACTJSICON from "../assets/skills/reactjs-icon.png";
import FIGMAICON from "../assets/skills/figma-icon.png";
import GITICON from "../assets/skills/git-icon.png";
import LINKICON from "../assets/projects/link-icon.png";
import HOTFLIXGPT from "../assets/projects/hotflixgpt-logo.png";
import RAPIDGYM from "../assets/projects/rapidgym-logo.png";
import TASTYBLOG from "../assets/projects/tasty-logo.png";
import PIGGYBANK from "../assets/projects/piggybank-logo.png";
import HOMEBAKES from "../assets/projects/homebakes-logo.png";
import CSSCERTIFY from "../assets/certificatetions/css3-certificate.png";
import BSCERTIFY from "../assets/certificatetions/bs-certificate.png";
import JSCERTIFY from "../assets/certificatetions/js-certificate.png";
import NAMASTEREACTERTIFY from "../assets/certificatetions/namaste-react-certificate.jpg";
import REACTCERTIFY from "../assets/certificatetions/react-certificate.jpg";
import FIGMACERTIFY from "../assets/certificatetions/figma-certificate.jpg";
import KLULOGO from "../assets/about/klu-logo.png";
import LDCLOGO from "../assets/about/ldc-logo.png";
import STJOSEPHLOGO from "../assets/about/stjoseph-logo.png";
import LOCATIONICON from "../assets/contact/location-icon.png";
import PHONEICON from "../assets/contact/phone-icon.png";
import MAILICON from "../assets/contact/mail-icon.png";

export const NAME = "Jothika";
export const ROLE = "FrontEnd Developement";
export const PASSION = "Passionate about Web Development";
export const skillHead = "My skills";
export const projectHead = "My projects";
export const certifyHead = "My certifications";
export const aboutHead = "About";
export const contactHead = "Contact";

export const menuContent = [
  {
    icon: HOMEICON,
    text: "Home",
    path: "/",
    isActive: true,
  },
  {
    icon: SKILLSICON,
    text: "Skills",
    path: "/skills",
  },
  {
    icon: PROJECTICON,
    text: "Projects",
    path: "/project",
  },
  {
    icon: CERTIFICATIONICON,
    text: "Certifications",
    path: "/certification",
  },
  {
    icon: ABOUTICON,
    text: "About",
    path: "/about",
  },
  {
    icon: CONTACTICON,
    text: "Contact",
    path: "/contact",
  },
];

export const links = [
  {
    icon: LINKEDINICON,
    link: "https://www.linkedin.com/in/jothika-k-s-0063b5214/",
  },
  {
    icon: GITHUBICON,
    link: "https://github.com/Joothika",
  },
];

export const smallCardContent = [
  "10+ projects",
  "Progess in Fullstack",
  "Hands on Experience",
  "Fresher",
];

export const bigCardContent = [
  {
    head: "Explore Projects",
    img: PROJECTEXPLORE,
    linkText: "view all",
    linkIcon: ARROWICON,
    path: "/project",
  },
  {
    head: "Valuable Certifications",
    img: NAMASTEREACTERTIFY,
    linkText: "view all",
    linkIcon: ARROWICON,
    path: "/certification",
  },
];

export const skillContent = [
  {
    icon: HTMLICON,
    text: "HTML5",
  },
  {
    icon: CSSICON,
    text: "CSS3",
  },
  {
    icon: BSICON,
    text: "Bootstrap",
  },
  {
    icon: TAILWINDICON,
    text: "TailwindCSS",
  },
  {
    icon: JSICON,
    text: "Javascript",
  },
  {
    icon: REACTJSICON,
    text: "ReactJS",
  },
  {
    icon: FIGMAICON,
    text: "Figma",
  },
  {
    icon: GITICON,
    text: "Git",
  },
];

export const projectLink = { linkIcon: LINKICON, gitIcon: GITHUBICON };

export const projectContent = [
  {
    img: HOTFLIXGPT,
    title: "HotFlixGPT",
    subtitle: "Entertainment",
    link: "https://hotflixgpt.netlify.app/",
    gitlink: "https://github.com/Joothika/HotFlixGPT",
  },
  {
    img: RAPIDGYM,
    title: "Rapid Gym",
    subtitle: "Gymnastic",
    link: "https://rapid-gym.netlify.app/",
    gitlink: "https://github.com/Joothika/RapidGym",
  },
  {
    img: TASTYBLOG,
    title: "Tasty Blog",
    subtitle: "Recipe Guide",
    link: "https://tasty-blog.netlify.app/",
    gitlink: "https://github.com/Joothika/TastyBlog",
  },
  {
    img: PIGGYBANK,
    title: "Piggy Bank",
    subtitle: "Mini Atm",
    link: "https://piggy-bank-acc.netlify.app/",
    gitlink: "https://github.com/Joothika/Piggy-Bank-Account",
  },
  {
    img: HOMEBAKES,
    title: "Home Bakes",
    subtitle: "Cake Landing Page",
    link: "https://home-bakes.netlify.app/",
    gitlink: "https://github.com/Joothika/Cake-Landing-Page",
  },
];

export const certificationContent = [
  CSSCERTIFY,
  BSCERTIFY,
  JSCERTIFY,
  NAMASTEREACTERTIFY,
  REACTCERTIFY,
  FIGMACERTIFY,
];

export const aboutDescription =
  "To achieve a good position by doing satisfied work in the IT field with my learning skills and knowledge. Passionate about Web Development that solves real world problems and self learning, Hardworking Person.";

export const aboutContent = [
  {
    img: KLULOGO,
    title: "KALASALINGAM UNIVERSITY",
    degree: "Msc Data Science",
    passout: "2022 - 2024",
    score: "9.18",
    percent: false,
    school: false,
  },
  {
    img: LDCLOGO,
    title: "LADY DOAK COLLEGE",
    degree: "Bsc IT",
    passout: "2019 - 2022",
    score: "86%",
    percent: true,
    school: false,
  },
  {
    img: STJOSEPHLOGO,
    title: "ST JOSEPH GIRLS HR SEC SCHOOL",
    degree: {
      twelth: "12th",
      tenth: "10th",
    },
    passout: {
      twelth: "2019",
      tenth: "2017",
    },
    score: {
      twelth: "77%",
      tenth: "94%",
    },
    percent: true,
    school: true,
  },
];

export const contactContent = [
  {
    img: LOCATIONICON,
    text: "Madurai, Tamil Nadu, India",
  },
  {
    img: PHONEICON,
    text: "8248120038 or 9363323962",
  },
  {
    img: MAILICON,
    text: "jothika.official.2002@gmail.com",
  },
];
