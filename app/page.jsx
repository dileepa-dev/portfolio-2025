"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import { Typewriter } from "react-simple-typewriter";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none"> 
            <span className="text-xl">
              <Typewriter
                words={["Web developer 👨🏻‍💻", "Mobile Developer 📲", "Gamer 🕹️", "Bike Lover 🏍️"]}
                loop={0} 
                cursor
                cursorStyle="|"
                typeSpeed={100} 
                deleteSpeed={50} 
                delaySpeed={1500}
              />
            </span>
            <h1>
              Hello I'm <br/> <span className="text-accent">Dileepa Malshan</span>
            </h1>
            <p className="max-w-[500px] mt-2 mb-7 text-white/60">
            Building seamless, scalable, and secure solutions, where code meets creativity, and innovation drives impact.
            </p>
            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/dileepaCV.pdf" download="dileepaCV.pdf">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"/> 
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;