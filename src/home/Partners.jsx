import React from 'react';
import { motion } from 'framer-motion';
import partners from '../Asset 10.png';
import Marquee from 'react-fast-marquee';

const Partners = () => {

  
  return (
    <div>
      <motion.h2
        className='text-center text-2xl md:text-5xl my-10 font-poppins-extraBold'
       
      >
        Knowledge Partners
      </motion.h2>

      <Marquee>

      <div
        className="img w-full h-[15vh] my-3"
       
      >
        <img src={partners} alt="" className='px-3 w-full h-full object-cover' />
      </div>

      <div
        className="img w-full h-[15vh] my-3"
       
      >
        <img src={partners} alt="" className='px-3 w-full h-full object-cover' />
      </div>
      </Marquee>
    </div>
  );
};

export default Partners;
