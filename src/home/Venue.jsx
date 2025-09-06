import React from 'react';
import { motion } from 'framer-motion';
import hotel from '../hotel.png';

const Venue = () => {
  return (
    <div className='w-full md:min-h-[60vh] overflow-y-hidden flex justify-center pb-5'>
      <div className='w-[85vw] rounded-xl flex flex-col items-center gap-6'>

        {/* Title with entry animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.015,
            y: -4,
            transition: { duration: 0.15, ease: 'easeOut' }
          }}
          className='md:text-6xl text-4xl font-bold my-3.5 font-poppins-bold'
        >
          Venue
        </motion.h2>

        {/* Animated Image Box */}
        <motion.div
          whileHover={{
            scale: 1.015,
            y: -4,
            transition: { duration: 0.15, ease: 'easeOut' }
          }}
          className="img w-[90vw] md:h-[80vh] h-[23vh] rounded-lg overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-white text-2xl relative"
        >

          {/* Background Image */}
          <img src={hotel} alt="Venue" className="w-full h-full object-cover" />

          {/* Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="txt md:w-[80vw] w-[85vw] md:h-[15vh] h-[6vh] rounded text-black bg-white absolute md:bottom-5 bottom-2 left-1/2 -translate-x-1/2 text-center flex items-center justify-center font-poppins-bold md:text-3xl text-[1rem] shadow-md"
          >
            Hotel Mercure,<br />Near Phoenix Palassio, Lucknow
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Venue;
