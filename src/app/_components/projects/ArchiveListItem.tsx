import { type Project } from "@/db/schema";
import { DisplayText } from "../text/DisplayText";
import { CustomButton } from "../CustomButton";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "react-responsive";

type Props = {
  isHovered?: boolean;
  id: number;
  item: Project;
  className?: string;
};

const defaultClassName =
  "w-full h-1/6 flex justify-between overflow-x-clip p-2 gap-x-4 transition-all";

export function ArchiveListItem(props: Props) {
  let [ref, { width }] = useMeasure();
  const isMd = useMediaQuery({ query: "(min-width: 768px)" }) ?? true;

  return (
    <div className={defaultClassName}>
      <div className="text-lg md:text-2xl flex gap-x-4 items-center justify-between w-full">
        <DisplayText className="text-blue-200 text-7xl text-center w-20">
          {props.id + 1}
        </DisplayText>
        <motion.div
          className="text-white"
          transition={{ ease: "easeInOut", duration: 0.3 }}
        ></motion.div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row pe-1.5 md:pe-3 items-end md:items-center md:justify-between gap-x-2 transition-all ease-in-out duration-300 relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-2 after:bg-gradient-to-l after:from-slate-900 after:to-transparent gap-y-2"
        initial={isMd ? { x: width + 32 } : { x: 0 }}
        animate={
          isMd ? (props.isHovered ? { x: 0 } : { x: width + 32 }) : { x: 0 }
        }
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <DisplayText className={props.className}>
          {props.item.title}
        </DisplayText>
        <div className={props.isHovered ? "opacity-100" : "opacity-50"}>
          <div
            ref={ref}
            className="flex items-center gap-x-2 gap-y-2 text-sm md:text-lg"
          >
            <Link
              href={props.item.liveUrl ?? ""}
              className={
                props.item.liveUrl === null ? "opacity-50" : "opacity-100"
              }
            >
              <CustomButton className="flex items-center gap-x-2 px-4 p-2 w-min text-nowrap">
                <>
                  <FaArrowUpRightFromSquare />
                  {props.item.liveUrl ? "Demo" : "Not Deployed"}
                </>
              </CustomButton>
            </Link>
            <Link
              href={props.item.githubUrl ?? ""}
              className={
                props.item.githubUrl === null ? "opacity-50" : "opacity-100"
              }
            >
              <CustomButton className="flex items-center gap-x-2 px-4 p-2 w-min text-nowrap">
                <>
                  <FaGithub />
                  {props.item.githubUrl ? "Repo" : "Repo not public"}
                </>
              </CustomButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
