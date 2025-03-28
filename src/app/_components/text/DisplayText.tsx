import { Dela_Gothic_One } from "next/font/google";

const DelaGothicOne = Dela_Gothic_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

type DisplayTextProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function DisplayText({ className, children, style }: DisplayTextProps) {
  return (
    <p className={`${DelaGothicOne.className} ${className}`} style={style}>
      {children}
    </p>
  );
}
