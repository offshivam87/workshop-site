import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { div } from "motion/react-m";

const images = [
  "https://ik.imagekit.io/885310/workshop/freepik__expand__14890.png",
  "https://ik.imagekit.io/885310/workshop/freepik__expand__14891.png",
  "https://ik.imagekit.io/885310/workshop/freepik__expand__14888.png",
  "https://ik.imagekit.io/885310/workshop/freepik__expand__14889.png",
  "https://ik.imagekit.io/885310/workshop/workshop/IMG_9193.HEIC?updatedAt=1757441638673",
  "https://ik.imagekit.io/885310/workshop/workshop/IMG_2068.JPG?updatedAt=1757441637018",
  "https://ik.imagekit.io/885310/workshop/workshop/IMG_4488.HEIC?updatedAt=1757441633675",
  "https://ik.imagekit.io/885310/workshop/workshop/IMG_4511.JPG?updatedAt=1757441630601",

  "https://ik.imagekit.io/885310/workshop/workshop/IMG_5215.HEIC?updatedAt=1757441633948",
  "https://ik.imagekit.io/885310/workshop/workshop/IMG_2002.JPG?updatedAt=1757441636203"



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
  
    <div className="overflow-y-hidden">
      <h2 className="text-2xl md:text-5xl my-8 font-poppins-bold text-center">Previous Workshops</h2>
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
