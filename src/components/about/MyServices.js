import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Skilled MERN stack developer specializing in frontend excellence for seamless and dynamic user experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Proficient web designer skilled in Figma, creating visually compelling and user-friendly digital experiences."
      />
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Mobile App Development"
        subTitle="Skilled mobile app developer specializing in Kotlin and SQLite DB for seamless and dynamic user experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Mobile App Design"
        subTitle="Proficient mobile app designer skilled in Figma, creating visually compelling and user-friendly digital experiences."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Machine Learning"
        subTitle="Experienced in machine learning, leveraging data to build intelligent, predictive models for diverse applications."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Software Engineer"
        subTitle="Versatile software engineer adept in multiple engineering practices, delivering robust and efficient software solutions."
      />
    </div>
  );
};

export default MyServices;
