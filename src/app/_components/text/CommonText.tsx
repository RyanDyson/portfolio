import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({
  subsets: ["latin"],
});

type CommonTextProps = {
  className?: string;
  children: React.ReactNode;
};

export function CommonText({ className, children }: CommonTextProps) {
  return <p className={`${className} ${DMSans.className}`}>{children}</p>;
}
