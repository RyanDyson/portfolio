"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { CommonText } from "../text/CommonText";
import { CustomButton } from "../CustomButton";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { EnhancedText, fontVariant } from "../text/EnhancedText";
import { ContactTitle } from "./ContactTitle";
import emailjs from "@emailjs/browser";
import { EmailNotif } from "./EmailNotif";

const contactInformation = {
  information: [
    {
      title: "dysonryan6@gmail.com",
      logo: <MdEmail />,
      url: "mailto:dysonryan6@gmail.com",
    },
    {
      title: "+852 9058 1053",
      logo: <FaPhone />,
      url: "https://wa.me/85290581053",
    },
    {
      title: "Hong Kong",
      logo: <MdLocationPin />,
      url: "https://www.google.com/maps/place/Hong+Kong/@22.396",
    },
  ],
  socials: [
    {
      logo: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ryan-dyson-darmawan-3a3b10241/",
    },
    {
      logo: <FaGithub />,
      url: "https://github.com/RyanDyson",
    },
    {
      logo: <FaInstagram />,
      url: "https://www.instagram.com/ryandyson/",
    },
  ],
};

type socialsProps = {
  logo: React.ReactNode;
  url: string;
};

const Socials = ({ logo, url }: socialsProps) => {
  return (
    <Link
      className="text-blue-800 cursor-pointer text-3xl hover:text-blue-600 transition"
      href={url}
    >
      {logo}
    </Link>
  );
};

const MemoizedTitle = React.memo(() => {
  return <ContactTitle />;
});

MemoizedTitle.displayName = "MemoizedTitle";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isEmailSent, setIsEmailSent] = useState<boolean | null>(false);

  const enhancedTextClassName = (index: number) => {
    return `word fancy text-center flex justify-between transition ease-in-out duration-300 ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "text-cadetblue opacity-20"
        : "hover:text-blue-800"
    }`;
  };

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_uz9g931",
          "template_sq3mc1o",
          formRef.current,
          "RlbS1ZkzQpw0QDEo5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsEmailSent(true);
          },
          (error) => {
            console.log(error.text);
            setIsEmailSent(false);
          }
        );
    }
  };

  return (
    <>
      <EmailNotif isSent={isEmailSent} onClose={setIsEmailSent} />
      <div
        id="contact"
        className="w-screen h-[200vh] md:h-screen py-12 px-3 md:p-12 bg-slate-200 overflow-hidden z-10"
      >
        <CommonText className="text-lg text-blue-950 font-bold">
          Lets build something together
        </CommonText>
        <MemoizedTitle />
        <form
          ref={formRef}
          onSubmit={handleSendEmail}
          className="flex flex-col md:flex-row gap-x-12 pt-12 h-4/6 gap-y-4"
        >
          <div className="w-full md:w-3/4 text-blue-950 border-none h-full flex flex-col gap-y-4">
            Your Name
            <input
              type="text"
              name="from_name"
              required
              className="text-blue-950 border-2 border-blue-200 rounded-md h-24 focus:border-blue-800 focus:bg-yellow-50 transition-all duration-200"
            ></input>
            Your Email
            <input
              type="email"
              name="user_email"
              required
              className="text-blue-950 border-2 border-blue-200 rounded-md h-24 hover:border-blue-800 focus:bg-yellow-50 transition-all duration-200"
            ></input>
            Your Message
            <input
              name="message"
              required
              className="text-blue-950 border-2 border-blue-200 rounded-md h-full hover:border-blue-800 focus:bg-yellow-50 transition-all duration-200"
            ></input>
          </div>

          <div className="w-full md:w-3/5 flex flex-col gap-y-4 gap-x-4">
            <div className="flex flex-col gap-y-4 text-5xl text-blue-800">
              {contactInformation.information.map((item, index) => {
                return (
                  <Link
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="font-bold text-2xl md:text-3xl"
                    href={item.url}
                  >
                    <EnhancedText
                      className={enhancedTextClassName(index)}
                      font={fontVariant.DM}
                      isAnimated={true}
                      text={item.title}
                    >
                      {item.logo}
                    </EnhancedText>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-row w-full h-full justify-end gap-x-2">
              {contactInformation.socials.map((item, index) => (
                <Socials {...item} key={index} />
              ))}
            </div>
            <CustomButton type="submit" className="rounded-md">
              <CommonText>SEND MESSAGE</CommonText>
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
}
