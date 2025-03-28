import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { DisplayText } from "../text/DisplayText";

const title = ["GET IN TOUCH", "GET IN TOUCH", "GET IN TOUCH", "GET IN TOUCH"];

export function ContactTitle() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -(2 * width) - 48;
    let controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div style={{ x: xTranslation }} className="flex flex-row gap-x-6">
        {title.map((item, index) => {
          return (
            <div key={index} ref={ref}>
              <DisplayText className="text-nowrap text-6xl md:text-9xl text-blue-800">
                {item}
              </DisplayText>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
