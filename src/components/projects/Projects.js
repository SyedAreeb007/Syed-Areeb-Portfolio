import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Quick Bite Cafe"
            category="E-Cafe Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="RailFood"
            category="E-Restaurant Website"
            image={workImgOne}
          />
          <ProjectsCard
            title="Stop Watch"
            category="Stop Watch"
            image={workImgTwo}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="LIBAAS"
            category="E-Commerce Website"
            image={workImgFour}
          />
          <ProjectsCard
            title="Currency Converter"
            category="Currency Converter"
            image={workImgSix}
          />
          <ProjectsCard
            title="Tic Tac Toe"
            category="Game"
            image={workImgFive}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
