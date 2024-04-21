"use client";
import { LuDownload, LuUser } from "react-icons/lu";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandHtml5,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandSass,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col justify-between min-h-screen pt-20 pb-20">
      <div className="">
        <p className="mb-10">
          <span className="text-stone-500 text-sm px-4 py-2 rounded-full inline-flex items-center border-dashed border border-stone-600">
            <LuUser className="mr-2" /> Who I am
          </span>
        </p>
        <h1 className="text-8xl mb-10">
          About <span className="text-lime-500">Me</span>
        </h1>
        <h2 className="text-xl font-regular mb-10">
          Hi, I'm Hanuman Sahay Sharma, your Frontend Alchemist!
        </h2>
        <p className="text-[18px] leading-8 max-w-[920px] font-light text-stone-300 mb-10">
          Welcome to my corner of the digital world! I'm a creative and
          detail-oriented front-end developer with a knack for transforming
          ideas into interactive and visually appealing web experiences.
          Transforming ideas into captivating web experiences is my passion.
          With expertise below skills, I bring a creative touch to every
          project.
        </p>
        <h2 className="text-xl font-regular mb-4 text-stone-300">
          My skills are:
        </h2>
        <div className="grid grid-cols-5 gap-4 mb-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandNextjs size="60" className="mb-2" />
            <p className="text-lg">NextJS</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandReact size="60" className="mb-2" />
            <p className="text-lg">ReactJS</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandTypescript size="60" className="mb-2" />
            <p className="text-lg">TypeScript</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandMongodb size="60" className="mb-2" />
            <p className="text-lg">MongoDB</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandSass size="60" className="mb-2" />
            <p className="text-lg">SCSS</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandHtml5 size="60" className=" mb-2" />
            <p className="text-lg">HTML5</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandCss3 size="60" className="mb-2" />
            <p className="text-lg">CSS3</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandTailwind size="60" className="mb-2" />
            <p className="text-lg">Tailwind CSS</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandBootstrap size="60" className=" mb-2" />
            <p className="text-lg">Bootstrap</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center justify-center p-5 w-full bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbBrandFigma size="60" className=" mb-2" />
            <p className="text-lg">Figma</p>
          </motion.div>
        </div>
        <button className="gap-2 flex items-center justify-center transition ease-in-out duration-300 px-8 py-3 bg-lime-600 text-white font-normal rounded-full hover:scale-110 hover:-translate-y-2">
          <LuDownload size="20" />
          Download CV
        </button>
      </div>
    </div>
  );
}
