"use client";
import Image from "next/image";
import { LuBriefcase } from "react-icons/lu";
import { motion } from "framer-motion";
import ValamisLogo from "../../assets/images/valamis-logo.svg";
import PunchhLogo from "../../assets/images/punchh-logo.svg";
import NoImage from "../../assets/images/no-image.svg";

export default function Experience() {
  return (
    <div className="flex flex-col justify-between min-h-screen pt-20 pb-20">
      <div className="">
        <p className="mb-10">
          <span className="text-stone-500 text-sm px-4 py-2 rounded-full inline-flex items-center border-dashed border border-stone-600">
            <LuBriefcase className="mr-2" /> Resume
          </span>
        </p>
        <h1 className="text-8xl mb-10">
          My <span className="text-lime-500">Experience</span>
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="p-10 bg-stone-800 rounded mb-10 hover:bg-stone-700"
        >
          <div className="flex w-full">
            <div className="flex-1">
              <p className="text-[18px] text-stone-300 mb-3">
                May 2020 - Present
              </p>
              <h2 className="text-[30px] text-lime-500 mb-3">
                Sr. Frontend Developer
              </h2>
              <h3 className="text-[18px] text-stone-300">
                Valamis India Pvt Ltd
              </h3>
            </div>
            <div className="flex justify-end items-center w-1/4">
              <Image
                src={ValamisLogo}
                alt="Valamis Logo"
                width={200}
                height={80}
                className="absolute opacity-50"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="p-10 bg-stone-800 rounded mb-10 hover:bg-stone-700"
        >
          <div className="flex w-full">
            <div className="flex-1">
              <p className="text-[18px] text-stone-300 mb-3">
                Febuary 2018 - April, 2020
              </p>
              <h2 className="text-[30px] text-lime-500 mb-3">
                Frontend UI Developer
              </h2>
              <h3 className="text-[18px] text-stone-300">Punchh Inc</h3>
            </div>
            <div className="flex justify-end items-center w-1/4">
              <Image
                src={PunchhLogo}
                alt="Punchh Logo"
                width={200}
                height={80}
                className="absolute opacity-50"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="p-10 bg-stone-800 rounded mb-10 hover:bg-stone-700"
        >
          <div className="flex w-full">
            <div className="flex-1">
              <p className="text-[18px] text-stone-300 mb-3">
                April 2012 - January, 2018
              </p>
              <h2 className="text-[30px] text-lime-500 mb-3">UI Developer</h2>
              <h3 className="text-[18px] text-stone-300">
                Planet Web Solutions
              </h3>
            </div>
            <div className="flex justify-center items-center w-1/4">
              <Image
                src={NoImage}
                alt="Planet Web Solutions Logo"
                width={100}
                height={80}
                className="absolute opacity-50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
