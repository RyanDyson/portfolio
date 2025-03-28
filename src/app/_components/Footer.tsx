import { CommonText } from "./text/CommonText";
import { DisplayText } from "./text/DisplayText";
import { navItems } from "./types/navItems";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex fixed bottom-0 left-0 items-baseline h-[50vh] w-screen p-4 z-0">
      <div className="flex flex-col md:flex-row relative justify-between w-full h-full items-end z-0">
        <div className="flex items-baseline self-start md:self-end">
          <DisplayText className="text-[6rem] md:text-[10rem] lg:text-[13rem] leading-none text-left text-yellow-50 ">
            RYAN
          </DisplayText>
          <CommonText className="text-md text-yellow-50">.DEV</CommonText>
        </div>
        <div className="flex flex-col gap-y-2 text-right justify-center">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <CommonText
                  key={index}
                  className="text-md text-yellow-50 hover:text-yellow-200 active:text-blue-950 transition-colors duration-100"
                >
                  {item.label}
                </CommonText>
              </Link>
            );
          })}
          <CommonText className="text-sm font-light text-slate-300">
            ©2024 all rights reserved
          </CommonText>
        </div>
      </div>
    </div>
  );
}
