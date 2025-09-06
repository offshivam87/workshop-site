import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import section3 from '../sec3.png';

const Sec3 = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div ref={ref} className='my-7 overflow-y-hidden'>
      <motion.div
        className='w-full md:h-auto h-auto bg-amber-500 overflow-hidden'
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <img
          src={section3}
          alt="Section 3"
          className='w-full h-full object-cover'
        />
      </motion.div>
    </div>
  );
};

export default Sec3;
