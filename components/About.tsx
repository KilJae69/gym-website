"use client";

import {FaUsers} from "react-icons/fa"
import {IoIosPricetag} from "react-icons/io"
import {FaDumbbell} from "react-icons/fa6"

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:"Our trainers are the best in the business, with years of experience and numerous awards to their name."
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle:"We offer competitive prices for our services, with a range of payment options to suit your needs."
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:"Our gym is equipped with the latest technology and equipment, so you can get the most out of your workout."
  }
]

export default function About() {
  return (
    <section className="pt-8 pb-14 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
           variants={fadeIn("up", 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}
          className="text-center">About us</motion.h2>
          <motion.p
           variants={fadeIn("up", 0.6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}
          className="max-w-[600px] mx-auto text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate pariatur asperiores?</motion.p>
        </div>
        { /* featured items */}
        <motion.div
         variants={fadeIn("up", 0.8)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featured.map((feature,index) => (
            <div className="flex flex-col justify-center items-center gap-4 border p-10" key={index}>
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">{feature.icon}</div>
              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h4 className="text-accent">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>

        { /* Achievements */}
        <motion.div
         variants={fadeIn("up", 1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         >
          <Achievements />
        </motion.div>
        
      </div>
    </section>
  );
  
}