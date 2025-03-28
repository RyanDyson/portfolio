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
// import type { PDFDocumentProxy } from "pdfjs-dist";
// import useMeasure from "react-use-measure";
import Link from "next/link";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa6";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

type PDFFile = string | File | null;

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

const workExperience = [
  {
    company: "WeMakeApp",
    position: "Intern Software Engineer",
    duration: "June 2024 - Augut 2024",
    description: (
      <ul>
        <li>
          Teamed up with a group of 5 people to deliver a live streaming service
          with a proprietary built in content management system with Integrated
          internationalization support for 4 languages (English, Spanish,
          Cantonese, Vietnamese).
        </li>
        <li>
          Built responsive UI components across 20+ pages including a
          notification dropdown with optimized database queries for user
          notifications and activities via implementation of TRPC endpoints
          which reduce API response time by 25%.
        </li>
        <li>
          Learned and deployed advance tech-stack consists of TypeScript, React,
          NEXTjs, TailwindCSS, Prisma, TRPC, Supabase PostgreSQL,
        </li>
      </ul>
    ),
    icon: <FaLaptopCode />,
  },
  {
    company: "Company B",
    position: "Frontend Developer",
    duration: "Jun 2020 - Dec 2021",
    description:
      "Developed responsive user interfaces using React and TailwindCSS.",
    icon: <FaCode />,
  },
  {
    company: "Company C",
    position: "Intern",
    duration: "Jan 2020 - May 2020",
    description:
      "Assisted in the development of internal tools and applications.",
    icon: <FaBriefcase />,
  },
];

const bioText =
  "Computer Science student at City University of Hong Kong. I am a Full Stack Developer and UI/UX Designer. I am passionate about creating beautiful and functional websites. I am always looking for new opportunities to learn and grow.";

export function Profile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isShown = useInView(ref);
  // const [ref, { width }] = useMeasure();

  // const [numPages, setNumPages] = useState<number>();
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex text-3xl md:text-4xl transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  // function onDocumentLoadSuccess(document: PDFDocumentProxy): void {
  //   const { numPages: nextNumPages } = document;
  //   setNumPages(nextNumPages);
  // }

  // const DialogContent = () => {
  //   const pdfWidth = width * (2 / 3);

  //   return (
  //     <div ref={ref} className="w-full h-full p-4 flex gap-x-4 overflow-scroll">
  //       {/* <Document file="cv.pdf" options={options} className="rounded-lg">
  //         {Array.from(new Array(numPages), (_el, index) => (
  //           <Page
  //             key={`page_${index + 1}`}
  //             pageNumber={index + 1}
  //             width={pdfWidth}
  //           />
  //         ))}
  //       </Document>
  //       <div></div> */}
  //     </div>
  //   );
  // };

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
        <DisplayText>Work Experience</DisplayText>
        <div className="flex flex-col gap-y-4 mt-4">
          {workExperience.map((experience, index) => (
            <motion.div
              key={index}
              variants={child}
              className="bg-blue-700 hover:bg-yellow-50 transition-colors duration-100 hover:text-blue-900 p-4 rounded-lg flex items-start gap-x-4"
            >
              <div className="text-4xl">{experience.icon}</div>
              <div>
                <CommonText className="text-xl font-bold">
                  {experience.position} at {experience.company}
                </CommonText>
                <CommonText className="text-md">
                  {experience.duration}
                </CommonText>
                <CommonText className="text-justify">
                  {experience.description}
                </CommonText>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
