"use client";

import { DisplayText } from "../text/DisplayText";
import { fontVariant, EnhancedText } from "../text/EnhancedText";
import { CommonText } from "../text/CommonText";
import { useState } from "react";
import Image from "next/image";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { CustomButton } from "../CustomButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { type WorkExperience, type BulletPoint } from "@/db/schema";

const Name = [
  {
    label: "RYAN",
  },
  {
    label: "DYSON",
  },
  {
    label: "DARMAWAN",
  },
];

const stack = [
  {
    icon: <DiReact />,
    label: "REACT",
  },
  {
    icon: <RiTailwindCssFill />,
    label: "TAILWINDCSS",
  },
  {
    icon: <SiNextdotjs />,
    label: "NEXTJS",
  },

  {
    icon: <SiPrisma />,
    label: "PRISMA",
  },
  {
    icon: <BiLogoPostgresql />,
    label: "POSTGRESQL",
  },
  {
    icon: <SiTypescript />,
    label: "TS",
  },
];

function formatDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

const bioText =
  "Computer Science student at City University of Hong Kong. I am a Full Stack Developer and UI/UX Designer. I am passionate about creating beautiful and functional websites. I am always looking for new opportunities to learn and grow.";

export function Profile({
  workExperience,
}: {
  workExperience: (WorkExperience & { bulletPoints: BulletPoint[] })[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [workExperienceIndex, setWorkExperienceIndex] = useState<number | null>(
    null
  );
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const isShown = useInView(ref);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };
  const container = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0)",
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
        delay: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      id="profile"
      className="bg-blue-800 w-screen text-amber-50 p-8 md:px-16 py-32 pb-48"
    >
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isShown && "show"}
        className="py-16 flex flex-col gap-y-4 md:flex-row justify-between"
      >
        <div className="flex flex-col">
          {Name.map((item, index) => (
            <motion.div
              key={index}
              variants={child}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <EnhancedText
                text={item.label}
                className={enhancedTextClassName(index)}
                font={fontVariant.DELA}
                isAnimated={true}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-right">
          <motion.div variants={child}>
            <DisplayText>Profile</DisplayText>
          </motion.div>
          <motion.div variants={child}>
            <CommonText className="text-xl">FULL STACK DEVELOPER </CommonText>
          </motion.div>
          <motion.div variants={child}>
            <CommonText className="text-xl">UI UX DESIGNER</CommonText>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isShown && "show"}
        className="flex flex-col gap-x-4 gap-y-4 md:flex-row"
      >
        <motion.div
          variants={child}
          className="h-auto border-2 border-yellow-100 md:w-3/5 max-w-[500px] mx-auto rounded-full"
        >
          <Image
            src={
              "https://jrhgdi3j25.ufs.sh/f/6B6ZcglZUrRwPcdmjxWEFHroJwhjTspQMV5O3aNIumB1Se9Z"
            }
            width={500}
            height={500}
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <div className="flex flex-col gap-y-2 justify-between">
          {/* <EnhancedText
            text="CS Student at CityU University HK"
            className={enhancedTextClassName(1)}
          ></EnhancedText> */}
          <motion.div variants={child}>
            <CommonText className="text-justify break-words">
              {bioText}
            </CommonText>
          </motion.div>
          <motion.div variants={child}>
            <DisplayText>Main Tech Stack</DisplayText>
          </motion.div>
          <div className="flex gap-x-2 justify-between text-3xl md:text-5xl items-center flex-wrap w-full">
            {stack.map((item, index) => (
              <motion.div
                variants={child}
                key={index}
                className="hover:text-amber-100 flex min-w-[250px] w-full md:w-auto justify-between"
              >
                {item.icon}
                <CommonText className="text-right">{item.label}</CommonText>
              </motion.div>
            ))}
          </div>
          <motion.div variants={child}>
            <DisplayText>Resume</DisplayText>
            <Link href="https://drive.google.com/drive/folders/1oiJrh3D08he5XuYw2damI9MKsreA_vFW?usp=sharing">
              <CustomButton
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 rounded-lg text-center "
              >
                <CommonText>View CV/Resume</CommonText>
              </CustomButton>
            </Link>
          </motion.div>
          {/* <CustomDialog isOpen={isOpen} setOpen={setIsOpen}>
            <DialogContent />
          </CustomDialog> */}
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isShown && "show"}
        className="mt-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-2">
          <DisplayText className="text-nowrap text-xl">
            Work Experience
          </DisplayText>
          <CommonText className="text-sm md:text-base text-nowrap text-amber-50/80 ">
            A snapshot of the teams I&apos;ve been working with and the problems
            I&apos;ve been solving.
          </CommonText>
        </div>

        <div className="mt-10 flex flex-col gap-y-8 relative">
          {/* Timeline spine (desktop only) */}
          <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-amber-50/20" />

          {workExperience.map((experience, index) => (
            <div key={index} className="relative flex gap-4 md:pl-6">
              {/* Timeline dot */}
              <div className="hidden md:flex w-6 justify-center pt-2">
                <div className="w-3 h-3 rounded-full border-2 border-amber-200 bg-blue-900" />
              </div>

              <motion.div
                variants={child}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setWorkExperienceIndex(null)}
                onMouseEnter={() => setWorkExperienceIndex(index)}
                style={
                  {
                    "--mouse-x": `${mousePosition.x}px`,
                    "--mouse-y": `${mousePosition.y}px`,
                  } as React.CSSProperties
                }
                className="relative group flex-1 bg-gradient-to-br from-[rgba(30,64,175,0.95)] via-[rgba(30,64,175,0.9)] to-[rgba(30,64,175,0.85)] transition-colors duration-300 p-6 md:p-7 rounded-2xl flex flex-col gap-y-4 overflow-hidden border border-amber-100/50 before:content-[''] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:ease-out before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(251,191,36,0.35)_0%,rgba(30,64,175,0)_65%)] before:pointer-events-none before:-z-10 hover:before:opacity-100"
              >
                <div className="relative flex flex-col md:flex-row justify-between gap-y-2 md:gap-y-0 md:items-center">
                  <div className="space-y-1">
                    <DisplayText className="text-xl md:text-2xl font-semibold text-amber-100">
                      {experience.jobTitle}
                    </DisplayText>
                    <CommonText className="text-sm md:text-base tracking-wide uppercase text-amber-50/80">
                      {experience.companyName}
                    </CommonText>
                  </div>
                  <CommonText className="text-xs md:text-sm text-amber-50/75 md:text-right whitespace-nowrap">
                    {formatDate(experience.startDate)} –{" "}
                    {experience.endDate
                      ? formatDate(experience.endDate)
                      : "Present"}
                  </CommonText>
                </div>

                <ul className="mt-3 space-y-2.5">
                  {experience.bulletPoints.map((bulletPoint, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2 text-sm md:text-base"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-200" />
                      <CommonText className="text-amber-50/95">
                        {bulletPoint.bulletPoint}
                      </CommonText>
                    </li>
                  ))}
                </ul>

                {experience.thingsLearned && (
                  <div className="mt-4 pt-4 border-t border-amber-100/30">
                    <CommonText className="text-xs md:text-sm text-amber-50/80 italic text-justify">
                      {experience.thingsLearned}
                    </CommonText>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
