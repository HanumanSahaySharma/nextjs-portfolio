"use client";
import Image from "next/image";
import Photo from "../assets/images/profile-photo.png";
import Navbar from "./Navbar";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className="fixed left-0 w-full text-center p-10 bg-stone-800  max-w-[360px] rounded-lg shadow-xl ml-4 mt-4">
      <div>
        <h1 className="text-[26px] font-bold text-white mb-2">
          Hanuman S. Sharma
        </h1>
        <p className="text-lg text-lime-500 mb-10">Frontend Developer</p>
        <div className="rounded-full overflow-hidden mb-10">
          <Image src={Photo} alt="Hanuman Profile Photo" />
        </div>
        <p className="text-white text-lg mb-5">
          <a href="emailto:hani1989sharma@gmail.com">
            hani1989sharma@gmail.com
          </a>
        </p>
        <p className="text-white text-lg mb-5">
          Live in Jaipur, India - 303903
        </p>
        <p className="text-stone-400 text-sm mb-10">
          &copy; 2024. All right reserverd
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="px-8 py-3 rounded-full font-normal mx-auto bg-lime-600 text-white gap-2 flex items-center justify-center"
        >
          <LuMail size="20" />
          Lets Connect
        </motion.button>
      </div>
      <Navbar />
    </div>
  );
}
