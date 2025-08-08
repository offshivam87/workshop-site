import React from 'react';
import { motion } from 'framer-motion';
import achal from '../achal.png';

const FirstSection = () => {
  return (
    <div className='bg-gradient-to-r from-[#72D2E0] to-[#7181E0] w-full '>
      <div className="md:flex items-center md:pt-30 pt-20 justify-center">
        <div className="md:w-[85vw] h-[21.7vh] md:h-[80vh] md:mt-5 flex justify-center items-center">
          <div className="txt md:pl-8 pl-5 flex flex-col md:gap-8 gap-1 pt-2.5 justify-center items-start text-white text-left md:w-[40vw] w-[50vw] h-[20vh] md:h-[75vh]">
            <div>
              <motion.h1
                className='font-poppins-bold text-[0.9rem] md:text-[3.4rem]'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.03,
                  color: '#d1e8ff',
                  transition: { duration: 0.25 },
                }}
              >
                Learn From The best,
              </motion.h1>

              <motion.h1
                className='font-poppins-bold text-[0.9rem] md:text-[3.5rem]'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  color: '#d1e8ff',
                  transition: { duration: 0.25 },
                }}
              >
                Heal with Precision
              </motion.h1>
            </div>

            <motion.p
              className='md:text-2xl font-poppins text-[0.6rem] font-bold'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 },
              }}
            >
              Endospine India - Advancing Spine Surgery <br />
              Through Education & Expertise
            </motion.p>

            <motion.button
              className='font-bold md:text-2xl font-poppins text-[0.7rem] bg-[#000F44] px-4 py-2 rounded'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#1e3a8a',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now!
            </motion.button>
          </div>

          <motion.div
            className="img md:w-[45vw] w-[50vw] h-[21vh] mt-4 md:h-[80vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.25 },
            }}
          >
            <img src={achal} alt="Achal" className='w-full h-full object-cover rounded-xl' />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[70vw] shadow-[5px_0_50px_rgba(0,0,0,0.6)] bg-[#000F44] md:rounded-t-2xl rounded-t md:h-[10vh] h-[4.8vh]">
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
