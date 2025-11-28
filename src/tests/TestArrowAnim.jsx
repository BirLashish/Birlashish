import React from "react";
import { motion, useTransform, useScroll } from "motion/react";

const TestArrowAnim = () => {
  const { scrollYProgress } = useScroll();

  // Преобразуем 0-1 в 0-1 (scaleX)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 h-2 w-full bg-blue-500 origin-left"
      />
    </>
  );
};

export default TestArrowAnim;
