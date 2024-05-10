"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempora?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Fitness coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempora?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Crossfit coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempora?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Johnson",
    role: "Fitness coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempora?",
    social: [
      { icon: FaFacebook, href: "https://facebook.com" },
      { icon: FaTwitter, href: "https://twitter.com" },
      { icon: FaYoutube, href: "https://youtube.com" },
    ],
  },
];

export default function Team() {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-6"
        >
          Our trainers
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              {/* image */}
              <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                <Image src={trainer.image} alt={trainer.name} fill />
              </div>
              <h4 className="mb-2">{trainer.name}</h4>
              <p className=" uppercase text-xs tracking-[3px] mb-2">
                {trainer.role}
              </p>
              <p className="mb-6 max-w-[320px] mx-auto">
                {trainer.description}
              </p>
              <div className="flex gap-12 justify-center">
                {trainer.social.map((social, index) => (
                  <div key={index}>
                    <Link
                      href={social.href}
                      className="hover:text-accent transition-all"
                    >
                      <social.icon className="text-lg" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        {/* button */}
        <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
}
