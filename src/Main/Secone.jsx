import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgimg from '../main photos/blured.png'; // blurred version
import achal from '../achal.png';
import semicicular from '../main photos/semi circular.png';
import withoutBlur from '../main photos/withoutblur.png'; // clear version
import txt1 from '../main photos/txt1.png'
import txt2 from '../main photos/txt2.png'

const Secone = () => {
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlur(true);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full md:h-[160vh] h-[58vh] overflow-x-hidden overflow-y-hidden relative flex justify-center">

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
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      )}

      {/* Achal Image */}
      <motion.div
        className="w-[85vw] md:w-[65vw] h-[40vh] md:h-[115vh] md:top-[10%] absolute top-[20%]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }} // entrance animation duration
        
        whileHover={{ 
          scale: 1.05, 
          transition: { duration: 0.25, ease: 'easeOut' } // faster hover animation
        }}
      >
        <img src={achal} alt="Achal" className="w-full h-full object-cover" />
      </motion.div>

      {/* Semicircular */}
      <div
        className="w-[180vw] h-[13vh] md:w-[115vw] md:h-[50vh] md:top-[75%] absolute top-[80%]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
       
      >
        <img src={semicicular} alt="Semicircle" className="w-full h-full object-fill" />
      </div>

      {/* Text */}
      <motion.h2
        className="text-2xl text-white md:text-[3rem] mx-auto font-poppins-bold text-center md:top-[89%] absolute top-[88%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Dr. Achal Gupta
      </motion.h2>

      <motion.p
        className="text-[0.55rem] text-white md:text-[1.2rem] mx-auto font-poppins text-center md:top-[97%] absolute top-[96%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        A distinguished Brain and Endoscopic Spine Surgeon based in Lucknow,
      </motion.p>
    </div>
  );
};

export default Secone;
