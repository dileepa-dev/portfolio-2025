"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Web Development", description: "Build websites and web applications using React, Next, Angular.", href: "#" },
  { num: "02", title: "Mobile Development", description: "Build mobile applications for Android and iOS Using Flutter and Swift.", href: "#" },
  { num: "03", title: "UI/UX Design", description: "I design user interfaces.", href: "#" },
  { num: "04", title: "App deployment", description: "Publishing apps to both app store and playstore", href: "#" },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</span>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h3>
              <p className="text-white/50">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
