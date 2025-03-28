import { useEffect, type Dispatch, type SetStateAction } from "react";
import { MdCancel } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useTransform,
  easeInOut,
} from "framer-motion";
import { Document } from "react-pdf";

type CustomDialogProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export function CustomDialog({ isOpen, setOpen, children }: CustomDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-950/10 pb-0 p-4 md:p-8 md:pb-0 overscroll-contain z-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
        >
          <motion.div
            className="bg-slate-900/90 backdrop-blur-3xl rounded-lg w-full h-full p-3 md:p-6 transition-all ease-in-out duration-300"
            initial={{ y: "100vh" }}
            animate={isOpen ? { y: 0 } : { y: "100vh" }}
            exit={{ y: "100vh" }}
            transition={{ ease: easeInOut, duration: 0.2 }}
          >
            <MdCancel
              size={24}
              onClick={() => setOpen(!isOpen)}
              className="cursor-pointer hover:text-yellow-100 "
            />
            <div className="w-full h-full overflow-scroll">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
