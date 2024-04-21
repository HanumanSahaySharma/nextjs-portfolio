"use client";
import Textarea from "../../components/Textarea";
import Input from "../../components/Input";
import { LucideMail } from "lucide-react";
import { TbMail, TbMapPin, TbPhone } from "react-icons/tb";
import Button from "../../components/Button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col justify-between min-h-screen pt-20 pb-20">
      <div className="">
        <p className="mb-10">
          <span className="text-stone-500 text-sm px-4 py-2 rounded-full inline-flex items-center border-dashed border border-stone-600">
            <LucideMail className="mr-2" /> Contact
          </span>
        </p>
        <h1 className="text-8xl mb-10">
          Lets <span className="text-lime-500">Connect</span>
        </h1>
        <p className="text-[18px] leading-8 max-w-[920px] font-light text-stone-300 mb-10">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-3 gap-8 mb-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full flex flex-col items-center justify-center p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbPhone size="60" className="mb-2" />
            <p className="text-lg font-normal">+91-9694-870-843</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full flex flex-col items-center justify-center p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbMail size="60" className="mb-2" />
            <p className="text-lg font-normal">hani1989sharma@gmail.com</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full flex flex-col items-center justify-center p-4 text-lime-500 bg-stone-800 rounded hover:bg-lime-500 hover:text-stone-900"
          >
            <TbMapPin size="60" className="mb-2" />
            <p className="text-lg font-normal">Jaipur, Rajasthan, India</p>
          </motion.div>
        </div>
        <h2 className="text-4xl mb-5">How Can I Help You?</h2>
        <div className="p-10 bg-stone-800 rounded mb-10">
          <div className="flex gap-10 mb-5">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Your name"
                value=""
                setValue={() => {}}
              />
            </div>
            <div className="w-full">
              <Input
                type="email"
                placeholder="Email"
                value=""
                setValue={() => {}}
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <Textarea placeholder="Your message" value="" setValue={() => {}} />
          </div>
          <Button label="Save" />
        </div>
      </div>
    </div>
  );
}
