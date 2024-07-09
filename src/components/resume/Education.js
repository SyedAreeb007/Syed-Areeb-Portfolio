import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2 Months"
          title="Web Developer"
          subTitle="RailFood (Pakistan)"
          des="Web Developer intern at RailFood, focused on delivering healthy food to train customers."
        />
        <ResumeCard
          badge="5 Months"
          title="Web Developer"
          subTitle="Prodigy InfoTech (India)"
          des="Web Developer intern at Prodigy InfoTech, aiming to become a proficient JavaScript developer."
        />
        <ResumeCard
          badge="2 Months"
          title="Game Developer"
          subTitle="M-Labs (Pakistan)"
          des="Game Developer intern at M-Labs, creating HCG games using Unity for this project."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - 2025"
          title="Software Engineering"
          subTitle="Sukkur IBA University"
          des="Graduating in Software Engineering from AACSB-Accredited Sukkur IBA University. Securing 3.13 CGPA."
        />
        <ResumeCard
          badge="2018 - 2021"
          title="Intermediate"
          subTitle="Govt. Islamia Science College"
          des="Pre-Engineering graduate from Govt. Islamia Science College, Sukkur. Secured (A) Grade."
        />
        <ResumeCard
          badge="2016 - 2018"
          title="Matriculation"
          subTitle="APWA High School"
          des="Computer Science graduate from APWA High SChool, Sukkur. Secured (A-1) Grade."
        />
      </div>
    </div>
  );
};

export default Education;
