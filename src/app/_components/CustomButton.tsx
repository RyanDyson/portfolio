import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function CustomButton({ children, className, ...props }: Props) {
  const defaultClassName =
    "w-full flex gap-x-4 bg-yellow-50 text-blue-700 justify-between items-center p-2 px-4 rounded-full hover:bg-blue-600 hover:text-yellow-50 hover:border-2 hover:border-yellow-50 transition-all border-2 active:bg-blue-800";

  return (
    <button className={twMerge(defaultClassName, className)} {...props}>
      {children}
    </button>
  );
}
