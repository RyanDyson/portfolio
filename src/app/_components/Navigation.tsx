"use client";
import { useState, useEffect } from "react";
import { navItems } from "./types/navItems";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { EnhancedText } from "./text/EnhancedText";
import { useMediaQuery } from "react-responsive";
import { FaHome } from "react-icons/fa";

type NavigationProps = {
  isHomeInView?: boolean;
};

export function Navigation({ isHomeInView }: NavigationProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredTextIndex, setHoveredIndex] = useState<number | null>(null);

  const isMd = useMediaQuery({ query: "(min-width: 768px)" }) ?? true;
  const controls = useAnimation();

  const enhancedTextClassName = (index: number) => {
    return `text-sm md:text-md text-center flex transition ease-in-out duration-300 ${
      hoveredTextIndex !== null && hoveredTextIndex !== index
        ? "opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => setIsExpanded(true), 300);
    } else {
      setIsExpanded(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  useEffect(() => {
    controls.start({
      width: isHovered ? (isMd ? "60%" : "100%") : isMd ? "4rem" : "3rem",
    });
  }, [isHovered, isMd, controls]);

  return (
    <AnimatePresence>
      {!isHomeInView && (
        <motion.div
          className="fixed bottom-0 md:top-0 left-0 w-screen p-4 md:h-0 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="relative flex justify-center items-center z-50 opacity-100">
            <motion.div
              className="flex relative justify-around items-center bg-slate-900/50 border border-slate-400/60 text-amber-50 backdrop-blur-xl overflow-hidden w-12 md:w-16 h-12 md:h-10 transition-all rounded-full"
              animate={controls}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!isExpanded && <FaHome size={16} />}
              {isExpanded && (
                <motion.div
                  className="flex flex-row gap-y-2 justify-around items-start md:items-center w-full px-4 md:px-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {navItems.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <EnhancedText
                        text={item.label}
                        className={enhancedTextClassName(index)}
                        isAnimated={false}
                      />
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
