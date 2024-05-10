"use client";
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

// Variants

const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div 
        variants={footerContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* Info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt="Logo"
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, sunt.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park, Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 640-6326</span>
              </li>
              <li className="">
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>sayhello@email.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* Blog */}
          <motion.div  variants={footerItem} className="">
            <h4 className="text-accent mb-4">Recent blog posts</h4>
            {/* Blog post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="leading-snug">How to stay motivated for all exercises</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
            {/* Blog post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="leading-snug"></h5>
                <h5 className="leading-snug">The benefits of regular exercise</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
            {/* Blog post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
              
                <h5 className="leading-snug">The importance of a balanced diet</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
          </motion.div>
          {/* Gallery */}
          <motion.div  variants={footerItem} >
            <div>
              <h4 className="text-accent mb-4">Gallery</h4>
              {/* Gallery images */}
              <div className="flex flex-wrap gap-2 ">
                <Link href="#">
                  <Image src={"/assets/img/trainers/david.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/matt.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/david.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/rosy.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/sofia.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/matt.jpg"} height={100} width={100} alt="David"/>
                </Link>
                <Link href="#">
                  <Image src={"/assets/img/trainers/rosy.jpg"} height={100} width={100} alt="David"/>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div  variants={footerItem} >
            <h4 className="text-accent">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quasi asperiores sit nobis vero rerum deleniti laboriosam.</p>
              <form className="flex items-center">
                <input type="text" placeholder="Your email address"className="h-[50px] outline-none px-4 text-primary-300"/>
                <CustomButton containerStyles="h-[50px] px-8" text="Send"/>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Copyrights */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link href="#" className="text-white hover:text-accent transition-all"><FaFacebook/></Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-accent transition-all"><FaTwitter/></Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-accent transition-all"><FaYoutube/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
