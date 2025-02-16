"use client";

import { FaHtml5, FaJs, FaReact, FaJava, FaAngular, FaSwift, Fa } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiFirebase, SiSpringboot } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About me
const about = {
  title: "About me",
  content: "I am a full-stack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies, including React, Spring Boot, Angular, and Swift. I am always looking to learn new things and improve my skills.",
  info: [
    { filedname: "Name", value: "Dileepa Mslahan" },
    { filedname: "Phone", value: "+94 773613102" },
    { filedname: "Email", value: "dlpmalshan@gmail.com" },
    { filedname: "job", value: "Intern SE" },
    { filedname: "Experience", value: "1+ Years" },
    { filedname: "Languages", value: "English, Sinhala" },
  ]
};

// Experience
const experience = {
  icon: "",
  title: "Experience",
  description: "I have experience working with a variety of technologies, including React, Spring Boot, Angular, and Swift. I have worked on a number of projects, including web applications, mobile applications, and APIs. I am always looking to learn new things and improve my skills.",
  items: [
    { title: "Intern Software Engineer", company: "Hsenid Software Lanka", date: "2024 - Present", description: "Worked on a number of projects, including web applications, mobile applications, and APIs." },
    { title: "Freelance App Developer", company: "DM App Studio", date: "2023 - Present", description: "bla bla bla" }

  ]
};

// Education
const education = {
  icon: "",
  title: "Education",
  description: "I completed my Advanced Level at Veyangoda Bandaranayake Central College and am currently pursuing my undergraduate studies at Informatics Institute of Technology, affiliated with the University of Westminster, UK.",
  items: [
    { title: "Software Engineer (UG)", company: "Informatics Institute of Technology", date: "2022 - Present", description: "Bachelor's degree in Computer Science from the University of Colombo School of Computing." },
    { title: "Advanced Level", company: "Veyangoda Bandaranayake Central College", date: "2016 - 2021", description: "" },
    { title: "Ordinary Level", company: "Veyangoda Bandaranayake Central College", date: "2016 - 2021", description: "Bachelor's degree in Computer Science from the University of Colombo School of Computing." }
  ]
};

// Skills
const skills = {
  icon: "",
  title: "Skills",
  description: "I have experience with a variety of technologies, including React, Spring Boot, Angular, and Swift. I am always looking to learn new things and improve my skills.",
  items: [
    { title: "HTML 5", icon: FaHtml5 },
    { title: "JavaScript", icon: FaJs },
    { title: "React JS", icon: FaReact },
    { title: "Java", icon: FaJava },
    { title: "Flutter", icon: SiFlutter },
    { title: "Java Springboot", icon: SiSpringboot },
    { title: "Firebase", icon: SiFirebase },
    { title: "Angular", icon: FaAngular },
    { title: "Swift", icon: FaSwift },
    { title: "Tailwind CSS", icon: SiTailwindcss },
    { title: "Next.js", icon: SiNextdotjs }
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left bg-red">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] border-2 border-gray-500 rounded-xl">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-4">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.date}</span>
                          <h4 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h4>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/50">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left bg-red">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.date}</span>
                          <h4 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h4>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/50">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] h-[300px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-gray-800 rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ease-in-out">{<skill.icon />}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                              {skill.title}
                              </p>
                            </TooltipContent>                          
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:w-w[620px] mx-auto xl:mx-0">{about.content}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex flex-items-center justify-center xl:justify-start gap-2" key={index}>
                        <span className="text-white/50">{item.filedname}</span>
                        <span className="text-lg">{item.value}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;