import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { div } from "motion/react-m";

const images = [
  "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?_gl=1*pr5a5*_ga*Njc0NDc3NzYuMTc0MjEzOTcyNg..*_ga_8JE65Q40S6*czE3NTQ3NDkzOTIkbzE3JGcxJHQxNzU0NzQ5NDE1JGozNyRsMCRoMA..",
  "https://images.pexels.com/photos/7722918/pexels-photo-7722918.jpeg?_gl=1*1x7oop5*_ga*Njc0NDc3NzYuMTc0MjEzOTcyNg..*_ga_8JE65Q40S6*czE3NTQ3NDkzOTIkbzE3JGcxJHQxNzU0NzQ5NDM5JGoxMyRsMCRoMA..",
  "https://images.pexels.com/photos/5149754/pexels-photo-5149754.jpeg?_gl=1*16y0g0k*_ga*Njc0NDc3NzYuMTc0MjEzOTcyNg..*_ga_8JE65Q40S6*czE3NTQ3NDkzOTIkbzE3JGcxJHQxNzU0NzQ5NDY0JGo1OSRsMCRoMA.."
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
    resetTimer();
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div>
      <h2 className="text-2xl md:text-5xl my-15 font-poppins-bold text-center">Previous Workshops</h2>
    <div className="relative w-[85vw] mx-auto my-3.5 h-[30vh] md:h-[80vh] rounded-2xl overflow-hidden flex items-center justify-center bg-black">
      <AnimatePresence custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 md:left-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <FaArrowLeft size={20} className="md:size-15" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-2 md:right-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <FaArrowRight size={20} className="md:size-15" />
      </button>
    </div>
    </div>
  );
};

export default Slider;
