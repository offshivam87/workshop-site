import React from 'react';
import { motion } from 'framer-motion';
import ESS from '../ESS.png'
import PLACE from '../Place.png'

const SecSection = () => {
  return (
    <div>
      {/* Top Section */}
      <motion.div
        className='w-full bg-white md:h-[25vh] h-[10vh] flex justify-center'
      >
        <motion.div
          className='w-[70vw] md:h-[15vh] h-[5vh] md:pb-13 pb-10 md:rounded-b-2xl rounded-b shadow-[0_5px_30px_rgba(0,0,0,0.3)] bg-[#000F44] text-white text-center md:gap-2 flex flex-col items-center justify-center'
        >
          <motion.h2 initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} className='md:text-6xl font-poppins-extraBold text-[1.2rem]'>
            Endospine 25, Lucknow
          </motion.h2>
          <motion.p initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} className='md:text-2xl text-[0.6rem] font-poppins font-bold'>
            Uniportal Spine Endoscopy & Fusion Surgery
          </motion.p>
          <motion.p initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} className='md:text-2xl text-[0.6rem] font-poppins font-bold'>
            EDUCATIVE LEARNING PROGRAM
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Image Cards Section */}
      <div className='flex justify-center md:mb-[8rem] mb-7'>
        <div className="img1 w-[90vw] flex flex-col md:flex-row justify-center md:gap-10 gap-8 items-center">

          {/* IMAGE 1 */}
          <motion.div
            className='w-full md:w-[45vw] md:h-[50vh] h-[30vh] rounded-2xl shadow-[0_0px_30px_rgba(0,0,0,0.3)] relative cursor-pointer'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
          >
            <img
              src={ESS}
              alt=""
              className='w-full h-full rounded-2xl object-cover'
            />
            <div className="w-[80%] md:w-[35vw] h-auto py-2 md:h-[15vh] rounded-[10px] bg-white absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center text-center font-poppins-bold text-sm md:text-3xl leading-tight px-3">
              Hands-on Cadaver Workshop
            </div>
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            className='w-full md:w-[45vw] md:h-[50vh] h-[30vh] rounded-2xl shadow-[0_0px_30px_rgba(0,0,0,0.3)] relative cursor-pointer'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
          >
            <img
              src={PLACE}
              alt=""
              className='w-full h-full rounded-2xl object-cover'
            />
            <div className="w-[80%] md:w-[35vw] h-auto py-2 md:h-[15vh] rounded-[10px] bg-white absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center text-center font-poppins-bold text-sm md:text-3xl leading-tight px-3">
              In Association with Department <br />
              of Anatomy, KGMU, Lucknow
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SecSection;
