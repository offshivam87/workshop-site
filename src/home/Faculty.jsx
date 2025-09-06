import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import faculty from '../faculty.png';

const Faculty = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className='flex flex-col overflow-y-hidden items-center' ref={ref}>
      
      {/* Heading with view-triggered animation */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className='md:text-6xl text-4xl font-poppins-extraBold text-center my-3.5 text-black'
      >
        Faculty
      </motion.h2>

      {/* Image with hover and scroll animation */}
      <motion.div
        whileHover={{ scale: 1.015, y: -4 }}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="img md:w-[90vw] h-[28vh] md:h-auto"
      >
        <img src={faculty} alt="Faculty" className='w-full h-full object-cover' />
      </motion.div>
    </div>
  );
};

export default Faculty;
