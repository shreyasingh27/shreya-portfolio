// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html5.svg";
import css from "./assets/images/Skills/css.svg";
import javascript from "./assets/images/Skills/javascript.svg";
import jquery from "./assets/images/Skills/jquery.svg";
import redux from "./assets/images/Skills/redux.svg";
import materialUI from "./assets/images/Skills/material-ui.svg";
import bootstrap from "./assets/images/Skills/bootstrap.svg";
import tailwind from "./assets/images/Skills/tailwind.svg";
import sass from "./assets/images/Skills/sass.svg";
import git from "./assets/images/Skills/git.svg";
import canva from "./assets/images/Skills/canva.svg";
import opencart from "./assets/images/Skills/opencart.svg";
import shopify from "./assets/images/Skills/shopify.svg";
import webflow from "./assets/images/Skills/webflow.svg";
import wordpress from "./assets/images/Skills/wordpress.svg";
import zeplin from "./assets/images/Skills/zeplin.svg";
import jira from "./assets/images/Skills/jira.svg";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdOutlineLocationOn } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#experiences",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Frontend Developer",
    firstName: "SHREYA",
    LastName: "SINGH",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "9+",
        text: "Years of Experience in Frontend development",
      },
      {
        count: "3+",
        text: "Years of Experience in React",
      },
      {
        count: "100+",
        text: "Ecommerce Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "Sass",
        para: "Lorem ipsum text  dummy",
        logo: sass,
      },
      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Jquery",
        para: "Lorem ipsum text  dummy",
        logo: jquery,
      },
      {
        name: "Bootstrap",
        para: "Lorem ipsum text  dummy",
        logo: bootstrap,
      },
      {
        name: "Material Ui",
        para: "Lorem ipsum text  dummy",
        logo: materialUI,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "Opencart",
        para: "Lorem ipsum text  dummy",
        logo: opencart,
      },
      {
        name: "Shopify",
        para: "Lorem ipsum text  dummy",
        logo: shopify,
      },
      {
        name: "Webflow",
        para: "Lorem ipsum text  dummy",
        logo: webflow,
      },
      {
        name: "Wordpress",
        para: "Lorem ipsum text  dummy",
        logo: wordpress,
      },

      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Canva",
        para: "Lorem ipsum text  dummy",
        logo: canva,
      },
      {
        name: "Zeplin",
        para: "Lorem ipsum text  dummy",
        logo: zeplin,
      },

      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "Jira",
        para: "Lorem ipsum text  dummy",
        logo: jira,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },

  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shreyanutan27@gmail.com",
        icon: GrMail,
        link: "mailto:shreyanutan27@gmail.com",
      },
      {
        text: "+91 8802106892",
        icon: MdCall,
        link: "8802106892",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/shreyasingh27/",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/shreya-singh-027b5478/",
      },
      {
        text: "Bengaluru",
        icon: MdOutlineLocationOn,
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
