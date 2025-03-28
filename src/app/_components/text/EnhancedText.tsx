"use client";
import React, { Children, useState } from "react";
import { DisplayText } from "./DisplayText";
import { CommonText } from "./CommonText";

const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

interface EnhancedTextProps {
  id?: string;
  text: string;
  className?: string;
  font?: fontVariant;
  isAnimated?: boolean;
  children?: React.ReactNode;
}

export enum fontVariant {
  "DELA",
  "DM",
}

export const EnhancedText = ({
  font,
  id,
  text,
  className,
  isAnimated,
  children,
}: EnhancedTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-between w-full">
      {children}
      <div
        id={id}
        className={`${className} fancy`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text.split("").map((char, index) => (
          <span key={index} className={isAnimated ? "outer" : ""}>
            <span
              className={isAnimated ? "inner" : ""}
              style={{ animationDelay: `${rand(-5000, 0)}ms` }}
            >
              {font === fontVariant.DELA ? (
                <DisplayText
                  className={`letter text-center ${isHovered ? "hovered" : ""}`}
                  style={{
                    animationDelay: `${index * 1000}ms`,
                  }}
                >
                  {char}
                </DisplayText>
              ) : (
                <CommonText>{char}</CommonText>
              )}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
