import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Syed_Areeb_CV.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Web Developer", "MERN Stack Developer", "UI Designer", "Machine Learning"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Syed Areeb</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              onClick={() => handleRedirect("https://github.com/SyedAreeb007")}
            >
              <FaGithub />
            </span>
            <span
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              onClick={() => handleRedirect("https://www.linkedin.com/in/syed-areeb-b18117242/")}
            >
              <FaLinkedin />
            </span>
            <span
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              onClick={() => handleRedirect("https://www.facebook.com/syedareebh")}
            >
              <BsFacebook />
            </span>
            <span
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              onClick={() => handleRedirect("https://www.instagram.com/syed_areeb_007/")}
            >
              <FiInstagram />
            </span>
            <span
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              onClick={() => handleRedirect("mailto:syedareeb445@gmail.com")}
            >
              <FiMail />
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              DOWNLOAD CV <BsCloudLightningFill />
            </button>
          </a>
          <button
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            CONTACT ME <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
