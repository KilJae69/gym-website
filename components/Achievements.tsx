"use client"

import CountUp from "react-countup";
import {FaBriefcase, FaClock, FaTrophy} from "react-icons/fa";
import {ImUsers} from "react-icons/im";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";


const stats = [
    {
        number:19,
        icon: FaBriefcase ,
        text: "training courses"
    },
    {
        number:879,
        icon: FaClock ,
        text: "working hours"
    },
    {
        number:150,
        icon: ImUsers ,
        text: "happz customers"
    },
    {
        number:9,
        icon: FaTrophy ,
        text: "international awards"
    },
]

// animation
const statsContainerVardiants = {
    hidden: {opacity:0},
    show: {
        opacity:1,
        transition: {
            staggerChildren:0.4,
            duration:0.5,
            ease:"linear",
        }
    }
}

const statItem = {
    hidden: {y:20, opacity: 0},
    show: {
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            ease:[0.25, 0.6, 0.3, 0.8]
        }
    }
}



export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <section>
        <div className="container mx-auto">
            <motion.div
            variants={statsContainerVardiants}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className="grid grid-cols-2 md:grid-cols-4 gap-16">
                {stats.map((stat,index) => (
                    <motion.div 
                    variants={statItem}
                    
                    className="flex flex-col justify-center items-center" key={index}>
                        {/** circle outer*/}
                        <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                            {/** circle inner */}
                            <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                                {/** Render count up animation only when component in the view*/}
                                {isInView && <CountUp start={0} end={stat.number} duration={6}/>}
                            </div>
                        </div>

                        {/** text */}
                        <div className="flex flex-col justify-center items-center text-center">
                            {React.createElement(stat.icon,{className:"text-3xl mb-2"})}
                            <h4>{stat.text}</h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
  
}