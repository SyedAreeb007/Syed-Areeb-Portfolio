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
          <a href="https://quick-bite-cafe-cc7zqz08h-syedareebhussainbssef21-iba-sukedu.vercel.app/" target="_blank" rel="noopener noreferrer">
            <ProjectsCard
              title="Quick Bite Cafe"
              category="E-Cafe Website"
              image={workImgThree}
            />
          </a>
          <ProjectsCard
            title="RailFood"
            category="E-Restaurant Website"
            image={workImgOne}
          />
          <a href="https://stop-watch-plum.vercel.app/" target="_blank" rel="noopener noreferrer">
            <ProjectsCard
              title="Stop Watch"
              category="Stop Watch"
              image={workImgTwo}
            />
          </a>
        </div>
        <div className="px-6">
          <a href="https://libaas.vercel.app/" target="_blank" rel="noopener noreferrer">
            <ProjectsCard
              title="LIBAAS"
              category="E-Commerce Website"
              image={workImgFour}
            />
          </a>
          <a href="https://currencyconverter-new.vercel.app/" target="_blank" rel="noopener noreferrer">
            <ProjectsCard
              title="Currency Converter"
              category="Currency Converter"
              image={workImgSix}
            />
          </a>
          <a href="https://tic-tac-toe-new-one.vercel.app/" target="_blank" rel="noopener noreferrer">
            <ProjectsCard
              title="Tic Tac Toe"
              category="Game"
              image={workImgFive}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
