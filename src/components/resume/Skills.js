import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design  Start here =================== */}
      
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4">
          {/* Web Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Web Development</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Mobile App Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Mobile App Development</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">UI Design</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Machine Learning */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Machine Learning
            </p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* SE Practices */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SE Practices</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
      {/* =============== Design End here ==================== */}
      {/* =============== Language Start here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        {/* English */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Urdu */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Urdu</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      {/* =============== Languages End here ===================== */}
      {/* =============== Coading Start here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        {/* JavaScript */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JavaScript</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Nodejs */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Node js</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[50%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Reactjs */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">React js</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Kotlin */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Kotlin</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* MongoDB */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MongoDB</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[70%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* MySQL */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MySQL</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* SQLite */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SQLite</p>
            <span className="w-[93%] bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-[93%] absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      
      {/* =============== Coading End here ==================== */}
      {/* =============== Knowledge Start here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            MERN Stack
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            MySQL
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Bootstrap, AntDesign
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Figma
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Notion
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Git, Github
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Vercel
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Jest/RTL
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            JUnit
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Postman
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Selenium
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Redux
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            NPM
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Mobile App Dev (Kotlin, SQLite DB)
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            RESTful APIs
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Machine Learning
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            PowerBI, Tableau
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Networking (Cisco Packet Tracer)
          </li>
        </ul>
      </div>
      
      {/* =============== Knowledge End here ==================== */}
    </div>
  );
};

export default Skills;
