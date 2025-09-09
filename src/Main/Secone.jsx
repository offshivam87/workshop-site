import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgimg from '../main photos/blured.png'; // blurred version
import achal from '../achal.png';
import semicicular from '../main photos/semi circular.png';
import withoutBlur from '../main photos/withoutblur.png'; // clear version
import txt1 from '../main photos/txt1.png'
import txt2 from '../main photos/txt2.png'
import fbg from '../main photos/fbg.png'
import sbg from '../main photos/sbg.png'
import badge from '../main photos/badge.png'
import invertedbadge from '../main photos/badge invert.png'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



import { div } from 'motion/react-client';

const Secone = () => {


  const images = [
    "https://ik.imagekit.io/885310/ehighlights/RGF_6138.JPG",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6264.JPG",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6287.JPG",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6305.JPG",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6302.JPG",
    "https://ik.imagekit.io/885310/ehighlights/DSC_7758.JPG?updatedAt=1757440749227",
    "https://ik.imagekit.io/885310/ehighlights/DSC_7716.JPG?updatedAt=1757440722163",
    "https://ik.imagekit.io/885310/ehighlights/DSC_7596.JPG?updatedAt=1757440667184",
    "https://ik.imagekit.io/885310/ehighlights/DSC_7750.JPG?updatedAt=1757440647934",
    "https://ik.imagekit.io/885310/ehighlights/DSC_7681.JPG?updatedAt=1757440612316",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6265.JPG?updatedAt=1757440562706",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6264.JPG?updatedAt=1757151846531",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6260.JPG?updatedAt=1757440529227",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6144.JPG?updatedAt=1757151845666",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6138.JPG?updatedAt=1757440462296",
    
    "https://ik.imagekit.io/885310/ehighlights/RGF_6127.JPG?updatedAt=1757151844562",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6135.JPG?updatedAt=1757440462112",
    "https://ik.imagekit.io/885310/ehighlights/RGF_5969.JPG?updatedAt=1757151840918",
    "https://ik.imagekit.io/885310/ehighlights/RGF_5959.JPG?updatedAt=1757151840687",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6496.JPG?updatedAt=1757440359088",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6491.JPG?updatedAt=1757440379289",
    "https://ik.imagekit.io/885310/ehighlights/RGF_5946.JPG?updatedAt=1757151839006",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6472.JPG?updatedAt=1757151834395",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6433.JPG?updatedAt=1757440499732",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6308.JPG?updatedAt=1757440398671",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6302.JPG?updatedAt=1757440410646",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6285.JPG?updatedAt=1757440483604",
    "https://ik.imagekit.io/885310/ehighlights/RGF_6287.JPG?updatedAt=1757440579582"


  ]


  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
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
  }





  const [showBlur, setShowBlur] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  // Preload all images used in this component
  useEffect(() => {
    const imageList = [txt1, txt2, achal, semicicular];
    let loadedCount = 0;

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageList.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Blur fade-in timer
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setShowBlur(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  // Loading screen until images are ready
  if (!imagesLoaded) {
    return (
      <div className="flex overflow-y-hidden overflow-x-hidden items-center justify-center w-full h-[58vh] md:h-[160vh]  text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className='overflow-x-hidden'>
      <div className="w-full md:h-[130vh] h-[48vh] overflow-x-hidden overflow-y-hidden relative flex justify-center">

        {/* Without Blur Image - Static */}
        <img
          src={txt1}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Blurred Image - Fade In */}
        {showBlur && (
          <motion.img
            src={txt2}
            alt=""
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
          />
        )}

        {/* Achal Image */}
        <motion.div
          className="w-[85vw] md:w-[65vw] h-[40vh] md:h-[75vh] md:top-[9%] absolute top-[16%]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 6, ease: "easeIn" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.25, ease: "easeOut" }
          }}
        >
          <img src={achal} alt="Achal" className="w-full h-full object-contain" />
        </motion.div>


        {/* Semicircular */}



      </div>




      <div
        className="
    w-full 
    h-[40vh]          
    md:h-[155vh]  
    
    absolute 
    top-[40%] 
    pt-3
    md:pt-15  
    md:top-[78%]
    flex flex-col md:gap-10 gap-1 items-center justify-start  bg-cover bg-center
  "
        style={{ backgroundImage: `url(${fbg})` }}


      >

        <h2 className='text-3xl md:text-6xl top-4 text-white font-poppins-bold '>Dr. Achal Gupta</h2>
        <p className='text-[0.6rem]  md:text-2xl text-white px-15 md:px-[25rem] text-center'>A distinguished Brain and Endoscopic Spine Surgeon, Dr. Achal Gupta has dedicated his career to advancing minimally invasive techniques that transform outcomes and patient recovery. Beyond his surgical expertise, he stands as a mentor and guide, shaping the next generation of spine surgeons through hands-on training, cadaver workshops, and academic leadership. His vision for Endospine India is to build a legacy of knowledge, innovation, and compassionate care inspiring doctors across India and beyond.</p>

        <h2 className='text-[1rem]  text-white md:text-6xl md:mt-10  font-poppins-bold '>Event Highlights - Endospine 25</h2>

        <div className="w-[80vw] h-[22vh] md:h-[80vh] top-[80%] absolute overflow-hidden md:top-[60%] rounded-2xl md:rounded-3xl ">
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
              className="absolute rounded-2xl w-full h-full object-top object-cover"
            />
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className=" absolute top-[40%] left-2 md:left-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowLeft size={20} className="md:size-15" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute top-[40%] right-2 md:right-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowRight size={20} className="md:size-15" />
          </button>

        </div>
      </div>

      <div
        className="w-full  h-[50vh] md:h-[120vh]   flex-col gap-1 items-center flex justify-center bg-cover bg-center"



      ></div>

    </div>
  );
};

export default Secone;
