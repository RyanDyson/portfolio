import { useRef } from "react";
import Image from "next/image";
import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { motion, easeInOut } from "framer-motion";
import { FaArrowUpRightFromSquare, FaFigma } from "react-icons/fa6";
import { FaGithub, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { CustomButton } from "../CustomButton";
import { cn } from "@/lib/utils";
import { type Project } from "@/db/schema";

type Props = {
  item: Project;
  index: number;
  setHoveredIndex?: (index: number) => void;
  isHovered?: boolean;
};

export const ProjectCard = ({ item, index, isHovered }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // isHovered && cardRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={cardRef}
      className="w-max h-[100vh] md:h-[500px] overflow-y-hidden"
    >
      <motion.div
        key={index}
        className=" flex flex-col w-[800px] transition-all duration-300 ease-in-out gap-y-8"
        initial={{ width: "50vw", height: "50%", position: "relative" }}
        animate={
          isHovered
            ? { width: "70vw", height: "120%" }
            : { width: "50vw", height: "50%", position: "relative" }
        }
        transition={{ ease: easeInOut, duration: 0.3 }}
      >
        <motion.div
          className="text-lg w-full px-8 flex flex-col text-wrap md:flex-row justify-between"
          initial={{ fontSize: "1.125rem" }}
          animate={isHovered ? { fontSize: "3rem" } : { fontSize: "1.125rem" }}
          transition={{ ease: easeInOut, duration: 0.3 }}
        >
          <DisplayText>{item.title}</DisplayText>
          {item.inProgress && (
            <CommonText className="hidden md:block text-sm py-1 px-4 bg-red-50 border-red-600 text-red-600 rounded-full w-max">
              In Progress
            </CommonText>
          )}
        </motion.div>
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={800}
          height={500}
          className={cn(
            "h-50vh max-h-[150px] object-cover rounded-lg w-full bg-zinc-950 transition-all duration-300 ease-in-out",
            isHovered && "max-h-[300px]"
          )}
          unoptimized
        />
        <motion.div
          className="flex flex-col md:flex-row gap-x-2 px-8 md:justify-between justify-start gap-y-2"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ease: easeInOut, duration: 0.3 }}
        >
          <div className="order-2 md:order-1 flex flex-col gap-y-1">
            <CommonText className="text-lg font-bold">
              {item.subtitle}
            </CommonText>
            <CommonText className="text-md">{item.stack}</CommonText>
            <CommonText className="text-sm">{item.description}</CommonText>
          </div>
          <div className="flex order-1 md:order-2 md:flex-flex-col md:flex-row gap-x-2 md:justify-between gap-y-2 w-max">
            {item.liveUrl && (
              <Link href={item.liveUrl} className="w-full">
                <CustomButton>
                  <FaArrowUpRightFromSquare />
                  <CommonText>Demo</CommonText>
                </CustomButton>
              </Link>
            )}
            {item.githubUrl && (
              <Link href={item.githubUrl} className="w-full">
                <CustomButton>
                  <FaGithub />
                  <CommonText>Repo</CommonText>
                </CustomButton>
              </Link>
            )}
            {item.figmaUrl && (
              <Link href={item.figmaUrl} className="w-full">
                <CustomButton>
                  <FaFigma />
                  <CommonText>Figma</CommonText>
                </CustomButton>
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
