"use client";

import { CommonText } from "../text/CommonText";
import { DisplayText } from "../text/DisplayText";
import { easeOut, motion } from "framer-motion";
import Acme from "@/../public/projects/acme.png";
import Discard from "@/../public/projects/discard.png";
import Hkiu from "@/../public/projects/hkiu.png";
import Hkscapes from "@/../public/projects/hkscapes.png";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect } from "react";

type Props = {
  exit: boolean;
  isLoading: boolean;
};

export function Loading({ isLoading, exit }: Props) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  });

  const variants = {
    visible: (custom: number) =>
      !exit
        ? {
            opacity: 1,
            transform: "translateY(0vh)",
            filter: "blur(20px)",
            transition: { delay: custom * 0.2, duration: 1.5, ease: easeOut },
          }
        : {
            opacity: 0,
            transform: "translateY(-100vh)",
            filter: "blur(0)",
            transition: { delay: custom * 0.2, duration: 1.5, ease: easeOut },
          },
  };

  return (
    <AuroraBackground className="bg-slate-950 text-yellow-50 fixed w-full h-full z-50 flex justify-center items-center">
      <div className="absolute w-full h-full z-10">
        <motion.div
          variants={variants}
          custom={0}
          animate="visible"
          initial={{
            transform: "translateY(50vh)",
            opacity: 0,
            filter: "blur(0)",
          }}
          className="absolute max-w-[500px] h-auto w-2/3 object-cover rounded-lg -top-5 left-12 blur-lg"
        >
          <Image src={Acme} alt="Acme" />
        </motion.div>
        <motion.div
          variants={variants}
          custom={1}
          animate="visible"
          initial={{
            transform: "translateY(50vh)",
            opacity: 0,
            filter: "blur(0)",
          }}
          className="absolute max-w-[550px] h-auto w-4/6 object-cover rounded-lg bottom-1/3 -right-20 blur-lg"
        >
          <Image src={Discard} alt="Discard" />
        </motion.div>
        <motion.div
          variants={variants}
          custom={2}
          animate="visible"
          initial={{
            transform: "translateY(50vh)",
            opacity: 0,
            filter: "blur(0)",
          }}
          className="absolute max-w-[400px] h-auto w-2/5 object-cover rounded-lg bottom-1/4 -left-14 blur-lg"
        >
          <Image src={Hkiu} alt="HKIU" />
        </motion.div>
        <motion.div
          variants={variants}
          custom={3}
          animate="visible"
          initial={{
            transform: "translateY(50vh)",
            opacity: 0,
            filter: "blur(0)",
          }}
          className="absolute max-w-96 h-auto w-1/2 object-cover rounded-lg x-bottom-5 md:-bottom-16 right-10 md:right-72 blur-lg"
        >
          <Image src={Hkscapes} alt="HKScapes" />
        </motion.div>
      </div>
      <motion.div
        className="z-50 text-center flex flex-col gap-y-4"
        initial={{ opacity: 0, filter: "blur(16px)" }}
        animate={
          !exit
            ? { opacity: 1, filter: "blur(0)" }
            : {
                filter: "blur(16px)",
                opacity: 0,
              }
        }
        transition={{ duration: 1.5, ease: easeOut }}
      >
        <CommonText className="text-6xl drop-shadow-xl">👋</CommonText>
        <DisplayText className="text-6xl drop-shadow-xl">Hey!</DisplayText>
        <CommonText className="text-lg drop-shadow-xl">
          Im Ryan. Lets build a better internet together
        </CommonText>
      </motion.div>
    </AuroraBackground>
  );
}
