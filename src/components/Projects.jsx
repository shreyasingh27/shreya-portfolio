import haldiramHomepageDesktop from "../assets/images/Projects/Haldirams-HomePage-Desktop.png";
import haldiramHomepageMobile from "../assets/images/Projects/Haldirams-HomePage-Mobile.png";
import tiffanyHomepageDesktop from "../assets/images/Projects/Tiffany-Homepage-Desktop.png";
import tiffanyHomepageMobile from "../assets/images/Projects/Tiffany-Homepage-Mobile.png";
import jackNJonesDesktop from "../assets/images/Projects/JacknJones-Desktop.png";
import jackNJonesMobile from "../assets/images/Projects/JacknJones-Mobile.png";
import GasJeansDesktop from "../assets/images/Projects/GasJeans-PDP-Desktop.png";
import GasJeansMobile from "../assets/images/Projects/GasJeans-PDP-Mobile.png";
import ATHomepageDesktop from "../assets/images/Projects/AmericanTourister-Homepage-Desktop.png";
import ATHomepageMobile from "../assets/images/Projects/AmericanTourister-Homepage-Mobile.png";

import CategoriesList from "../assets/images/Projects/CategoriesList.png";
import CategoriesDetail from "../assets/images/Projects/CategoriesDetail.png";
import productsDetail from "../assets/images/Projects/ProductsDetail.png";

import netflixHome from "../assets/images/Projects/Netflix-GPT-HomePage.png";
import netflixSignIn from "../assets/images/Projects/Netflix-GPT-SignIn.png";
import netflixSearch from "../assets/images/Projects/Netflix-GPT-SearchPage.png";

import FoodAppHome from "../assets/images/Projects/FoodApp_home.png";
import FoodAppDetail from "../assets/images/Projects/FoodApp_detail.png";
import FoodAppCart from "../assets/images/Projects/FoodApp_cart.png";

import YoutubeHome from "../assets/images/Projects/youtube-home.png";
import YoutubeDetail from "../assets/images/Projects/youtube-detail.png";
const projects = [
  {
    title: "Tiffany",
    description:
      "A premium eCommerce website for Tiffany & Co., developed using HTML, CSS, JavaScript, jQuery, and Bootstrap. It features elegant product detail pages, a sleek shopping cart, and a secure user account section, all crafted to reflect the brand's luxury identity with a responsive and user-friendly interface.",
    desktopImage: tiffanyHomepageDesktop,
    mobileImage: tiffanyHomepageMobile,
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Ecommerce"],
    link: "https://www.tiffany.co.in/",
  },
  {
    title: "Haldirams",
    description:
      "A responsive eCommerce website for Haldiram’s built with HTML, CSS, JavaScript, jQuery, and Bootstrap. It includes interactive product detail pages, a functional cart page, and a user accounts page, all designed for smooth navigation and a seamless shopping experience across devices.",
    desktopImage: haldiramHomepageDesktop,
    mobileImage: haldiramHomepageMobile,
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Ecommerce"],
    link: "https://ns-s1-kar-store3.kartify.in/",
  },
  {
    title: "Jack & Jones",
    description:
      "A stylish and responsive eCommerce website for Jack & Jones, built using HTML, CSS, JavaScript, jQuery, and Bootstrap. It includes dynamic product detail pages, a streamlined cart experience, and a secure user account section, all designed to deliver a seamless and fashion-forward shopping journey across devices.",
    desktopImage: jackNJonesDesktop,
    mobileImage: jackNJonesMobile,
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Ecommerce"],
    link: "https://www.jackjones.in/",
  },
  {
    title: "American Tourister",
    description:
      "A sleek and responsive eCommerce website for American Tourister, developed using HTML, CSS, JavaScript, jQuery, and Bootstrap. It includes detailed product pages, an easy-to-use shopping cart, and a secure user account section, all designed to provide a seamless and engaging shopping experience for travel enthusiasts across devices.",
    desktopImage: ATHomepageDesktop,
    mobileImage: ATHomepageMobile,
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Ecommerce"],
    link: "https://www.americantourister.in/",
  },
  {
    title: "Gas Jeans",
    description:
      "A modern and responsive eCommerce website for GAS Jeans, developed with HTML, CSS, JavaScript, jQuery, and Bootstrap. It features detailed product pages, an intuitive cart system, and a user account section, all tailored to offer a smooth and stylish shopping experience across all screen sizes.",
    desktopImage: GasJeansDesktop,
    mobileImage: GasJeansMobile,
    tags: ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "Ecommerce"],
    link: "https://www.gasjeans.in/",
  },
];

const multiimages = [
  {
    title: "Netflix GPT - AI Powered Movie Recommendations! 🎬🤖 ",
    description:
      "Crafted with React.js, Redux.js, and Tailwind CSS, this web app uses Google's Gemini AI to deliver personalized movie recommendations across multiple languages. From thrillers to comedies, Netflix Assist GPT is your go-to movie buddy! 🍿🌍✨",
    projectImages: [netflixSignIn, netflixHome, netflixSearch],
    tags: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Firebase",
      "TMDB API",
      "Gemini AI",
      "Responsive",
      "Multi Language",
    ],
    link: "https://github.com/shreyasingh27/netflix-gpt",
  },
  {
    title: "Food App ",
    description:
      "This application features real-time data fetching from Swiggy’s live API, ensuring up-to-date restaurant and menu information. It includes a shimmer effect for a smooth loading experience. Built with React Redux and Redux Toolkit for efficient state management, it leverages custom hooks to handle dynamic content seamlessly. ",
    projectImages: [FoodAppHome, FoodAppDetail, FoodAppCart],
    tags: ["React", "Redux", "Tailwind CSS", "Swiggy API", "Responsive"],
    link: "",
  },
  {
    title: "Youtube Clone",
    description:
      "This YouTube clone is developed with ReactJS and Tailwind CSS, delivering a smooth, responsive, and interactive user experience. It fetches video content using the YouTube API and features an auto-suggest search powered by dynamic API calls. A live chat system simulates real-time interaction by generating new messages every two seconds and displaying only the latest 10 messages for optimal performance and clarity.",
    projectImages: [YoutubeHome, YoutubeDetail],
    tags: ["React", "Tailwind CSS", "Youtube API", "Responsive"],
    link: "",
  },
  {
    title: "Kartify Dashboard",
    description:
      "It offers an intuitive interface for tracking orders, managing products, and analyzing sales data. The dashboard provides real-time insights, seamless navigation, and a responsive layout, making it a powerful tool for eCommerce administrators.",
    projectImages: [CategoriesList, CategoriesDetail, productsDetail],
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Jquery"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16"> Projects</h2>

          {/* start */}
          <div className="">
            <div className="grid gap-24">
              {multiimages.map((multiimage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="space-y-6 p-8">
                    <h3 className="text-2xl font-bold mb-3">
                      {multiimage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {multiimage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {multiimage.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-slate-200 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    {multiimage.projectImages.map((image, index) => (
                      <div className="space-y-6" key={index}>
                        {/* Desktop Monitor Frame */}
                        <div className="relative">
                          <div className="bg-slate-900 rounded-t-xl p-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="relative bg-slate-800 p-2 rounded-b-xl">
                            <div className="overflow-hidden h-[300px] rounded-lg">
                              <div className="h-full overflow-y-auto">
                                <img
                                  src={image}
                                  alt={`${multiimage.title} view`}
                                  className="w-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-800 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end */}
          <div className="grid gap-24 mt-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 cursor-pointer">
                        <a href={project.link} target="_blank">
                          {project.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-slate-200 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Desktop Monitor Frame */}
                    <div className="relative">
                      <div className="bg-slate-900 rounded-t-xl p-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="relative bg-slate-800 p-2 rounded-b-xl">
                        <div className="overflow-hidden h-[300px] rounded-lg">
                          <div className="h-full overflow-y-auto">
                            <img
                              src={project.desktopImage}
                              alt={`${project.title} desktop view`}
                              className="w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mobile Phone Frame */}
                  <div className="relative mx-auto w-[280px]">
                    <div className="relative  bg-slate-900 rounded-[3rem] p-4 h-[580px]">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-xl"></div>
                      <div className="h-full bg-white rounded-[2.5rem] overflow-hidden">
                        <div className="h-full overflow-y-auto">
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile view`}
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
