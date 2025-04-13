// import content
import { useEffect } from "react";
import { content } from "../Content";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-center justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[40%] right-[-15%] text-[#EAF2FA]">
            {" "}
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-16 px-6 pt-5 md:w-5/12 text-center"
          data-aos="fade-down"
        >
          <h2>{hero.title}</h2>

          <div className="flex justify-center space-x-6 pt-5 text-dark_primary">
            <a
              href="https://github.com/shreyasingh27/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-singh-027b5478/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BsLinkedin size={24} />
            </a>
            <a
              href="mailto:shreyanutan27@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BsEnvelope size={24} />
            </a>
            <a
              href="tel:8802106892"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BiPhoneCall size={24} />
            </a>
          </div>
          <br />
          <div className="flex justify-center">
            <a
              href="/Shreya_Singh-Senior_Frontend_Developer.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Resume
            </a>
          </div>

          <div className="flex flex-col gap-10 mt-10 w-full">
            <p className="flex items-center gap-5 text-center  ">
              With over 9 years of experience in frontend development and 3+
              years focused on React, I’ve contributed to 100+ eCommerce
              projects for major eCommerce brands.
            </p>
            {/* {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))} */}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[40rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover [mask-image:linear-gradient(to_bottom,_#bacff5_70%,_transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_#bacff5_70%,_transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
