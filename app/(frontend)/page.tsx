"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuFacebook, LuGithub, LuHome, LuLinkedin } from "react-icons/lu";

export default function Home() {
  let initialData = {
    tagline: "",
    yearsOfExperience: "",
    completedProjects: "",
  };
  const [initData, setInitData] = useState(initialData);
  useEffect(() => {
    const getData = async (url: string) => {
      const response = await axios.get(url);
      try {
        if (response.status === 200) {
          setInitData(response.data.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData("http://localhost:3000/api/home");
  }, []);
  return (
    <div className="flex flex-col justify-between min-h-screen pt-20 pb-20">
      <div>
        <p className="mb-10">
          <span className="text-stone-500 text-sm px-4 py-2 rounded-full inline-flex items-center border-dashed border border-stone-600">
            <LuHome className="mr-2" /> Introduce
          </span>
        </p>
        <h1 className="text-8xl mb-10">
          Hello, I'm <span className="text-lime-500">Hanuman</span>
        </h1>
        <h2 className="text-2xl text-semibold mb-10">
          A <span className="text-lime-500">Frontend Developer</span> from
          Jaipur, India.
        </h2>
        {initData.tagline && (
          <p className="text-[18px] max-w-[920px] font-light text-stone-300 mb-10">
            {initData.tagline}
          </p>
        )}
        <p className="text-[18px] max-w-[920px] font-light text-stone-300 mb-5">
          Connect with me
        </p>
        <div className="flex items-center gap-4 mb-10">
          <motion.a
            href={"#"}
            className="p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <LuFacebook size={30} />
          </motion.a>
          <motion.a
            href={"#"}
            className="p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <LuLinkedin size={30} />
          </motion.a>
          <motion.a
            href={"#"}
            className="p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <LuGithub size={30} />
          </motion.a>
        </div>
      </div>
      <div className="flex items-center gap-40">
        <div className="text-medium">
          <p className="text-[100px] text-lime-500">
            {initData.yearsOfExperience}+
          </p>
          <p className="text-stone-300 text-lg">YEARS OF EXPERIENCE</p>
        </div>
        <div className="text-medium">
          <p className="text-[100px] text-lime-500">
            {initData.completedProjects}+
          </p>
          <p className="text-stone-300 text-lg">PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
}
