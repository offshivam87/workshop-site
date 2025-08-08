import React from 'react';
import { motion } from 'framer-motion';
import calender from '../cal.png';
import location from '../loc.png';

const Cal = () => {
  return (
    <div className='bg-gradient-to-r from-[#72D2E0] to-[#7181E0] w-full md:h-[25vh] h-[13vh] flex justify-center items-center gap-6'>

      {/* Calendar Box */}
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.025,
          transition: { duration: 0.15, ease: 'easeOut' }
        }}
        className="w-[40vw] h-[80%] flex flex-col items-center justify-center rounded-xl bg-transparent transition-all duration-150"
      >
        <div className='md:w-[5rem] w-[2rem] md:h-[5rem] h-[2rem] mb-2'>
          <img src={calender} alt="Calendar Icon" className='w-full h-full object-contain' />
        </div>
        <p className='md:text-2xl text-[0.6rem] font-poppins font-bold text-center'>Saturday | Aug 23, 2025</p>
        <p className='md:text-2xl text-[0.6rem] font-poppins font-bold text-center'>Sunday | Aug 24, 2025</p>
      </motion.div>

      {/* Location Box */}
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.025,
          transition: { duration: 0.15, ease: 'easeOut' }
        }}
        className="w-[40vw] h-[80%] flex flex-col items-center justify-center rounded-xl bg-transparent transition-all duration-150"
      >
        <div className='md:h-[5rem] h-[2rem] mb-2'>
          <img src={location} alt="Location Icon" className='w-full h-full object-contain' />
        </div>
        <p className='md:text-2xl text-[0.6rem] font-poppins font-bold text-center'>Hotel Mercure</p>
        <p className='md:text-2xl text-[0.5rem] font-poppins font-bold text-center'>Near Pheonix Palassio, Lucknow</p>
      </motion.div>

    </div>
  );
};

export default Cal;
