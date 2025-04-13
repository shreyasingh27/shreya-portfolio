import { BiBriefcase } from "react-icons/bi";

const experiences = [
  {
    year: "May 2019 - Present",
    company: "ANS Commerce (Flipkart Group) , Gurugram",
    position: "Sr. Frontend Developer",
    description:
      "Led the development of enterprise-grade SaaS applications using HTML, CSS, Javascript, Jquery & React, focusing on performance optimization, delivering scalable features, and mentoring junior developers to boost team efficiency.",
    achievements: [
      "Led frontend development for 80+ eCommerce storefronts for top brands like Tiffany, Jack & Jones, Gas Jeans, Vero Moda, Superdry, West Elm, and ITC brands(Dermafique, Fiama,Engage).",

      "Created 30+ custom themes and designed a feature-rich dashboard for the Flipshop SaaS platform.",

      "Boosted performance scores (20 → 80), enhancing user experience, SEO, and overall site speed.",

      "Developed reusable checkout components in React to streamline development and maintain consistency (Kartwave).",

      "Delivered responsive, pixel-perfect UI/UX with accessibility best practices and cross-browser compatibility.",
    ],
  },
  {
    year: "March 2016 — April 2019 ",
    company: "91mobiles, Gurugram",
    position: "Frontend Developer",
    description:
      "Responsibility for Web page development of desktop and mobile site of 91mobiles from design to test and up to production deployment.",
    achievements: [
      " Created AMP pages of its mobile site.",
      " Created HTML email templates and newsletters for e-mail marketing campaigns.",
      " Designed complex interfaces to support third party systems.",
      " Tested front-end code in multiple browsers to ensure cross-browser compatibility. ",
      " Optimized pages for page speed using Google Page Speed (API) for Apache to obtain higher rankings on Search Engines (SEM).",
      " Did on site SEO implementations to increase traffic to client websites.",
      " Designed creatives for emailer and social media in photoshop. ",
      " Workflow tools included: HTML, CSS, Bootstrap, jQuery, Git, Zeplin and Photoshop",
      " Bug Tracking Software: Bugzilla",
    ],
  },
  {
    year: "November 2014 — March 2016 ",
    company: "GOLDEN PHOENIX, New Delhi ",
    position: "Web Developer",
    description:
      "Responsibility for overall web project management from development to execution and maintenance. ",
    achievements: [
      "Responsible for working on a range of projects, designing appealing websites and interacting on a daily basis with Front-End Development and marketers. ",
      "Responsive Web Design and HTML Development.",
      "Worked on WordPress & OpenCart to develop corporate & e-commerce site. ",
      "Utilize expertise in front-end development technologies such as HTML, Bootstrap, CSS, JavaScript to enhance interactivity. ",
    ],
  },
  {
    year: "January 2014 — October 2014  ",
    company: "VDOPIA INC, Gurgaon ",
    position: "Web Developer",
    description:
      "Responsible for working on a range of projects, Designed Rich Media Ad Units using JavaScript, HTML5, CSS, Dreamweaver, Edge Animate. ",
    achievements: [
      "In Vdopia, I worked for various clients like MacDonald’s, P&G, Panera, Hyundai, Toyota etc. ",
      "Developed Website under the direction of the Art Director. ",
      "Designed several Mobile Ad units like Banner, Wiper units, Hotspot, Interstitial in Photoshop. ",
      "For mobile video Ad, worked on video editing software like Adobe Premiere, Encoder, OJ soft. ",
      "Coordinated with Development and Creative teams. ",
      "Worked and had knowledge in advertising Domain",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiences">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div className="relative pl-8 pb-12 last:pb-0" key={index}>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-200">
                  <div className="absolute -left-1.5 top-0 h-6 w-6 rounded-full bg-dark_primary flex justify-center items-center">
                    {/* <Briefcase
                    size={12}
                    className="text-white absolute top-1 left-1"
                  /> */}
                    <BiBriefcase size={12} className="text-white absolute" />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <span className="text-sm font-semibold text-dark_primary">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{exp.position}</h3>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-dark_primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
