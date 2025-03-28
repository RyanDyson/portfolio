"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import { EnhancedText } from "../text/EnhancedText";
import { navItems } from "../types/navItems";
import { fontVariant } from "../text/EnhancedText";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex justify-between text-5xl sm:text-7xl md:text-7xl lg:text-8xl w-full transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "text-cadetblue opacity-20"
        : "hover:text-amber-100"
    }`;
  };

  return (
    <>
      <BackgroundGradientAnimation
        firstColor="238, 230, 193"
        secondColor="238, 230, 193"
        thirdColor="238, 230, 193"
        fourthColor="238, 230, 193"
        fifthColor="238, 230, 193"
        pointerColor="238, 230, 193"
        className="absolute w-screen h-[50vh] opacity-90 "
      />
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        id="home"
        className="absolute top-0 left-0 bg-circle w-screen h-screen"
      >
        <div className="flex justify-center items-center min-h-screen w-full flex-col">
          <div className="flex flex-col justify-between w-max-[700px] z-40">
            {navItems.map(
              (item, index) =>
                !item.notInHeader && (
                  <Link
                    key={index}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <EnhancedText
                      text={item.label}
                      className={enhancedTextClassName(index)}
                      font={fontVariant.DELA}
                      isAnimated={true}
                    />
                  </Link>
                )
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-30 bg-gradient-to-t from-blue-800 to-transparent w-screen h-screen" />
    </>
  );
});

Home.displayName = "Home";
