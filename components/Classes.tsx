"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import CustomButton from "./CustomButton";
import Image from "next/image";

const classes = [
  {
    name: "body-building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae numquam fugit tempore ipsam sunt!",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae numquam fugit tempore ipsam sunt!",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae numquam fugit tempore ipsam sunt!",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae numquam fugit tempore ipsam sunt!",
  },
];

export default function Classes() {
  return (
    <section className="" id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => (
          <div
            className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            key={index}
          >
            {/* overlay */}
            <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image
              src={item.img}
              fill
              alt={`${item.name} image`}
              className="object-cover"
            />
            {/* text and button */}
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-accent"
              >
                {item.name}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-white "
              >
                {item.description}
              </motion.p>
            </div>
            <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.2}}
            className="z-30"
            >

              <CustomButton
                containerStyles=" w-[164px] h-[46px]"
                text="Read more"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
