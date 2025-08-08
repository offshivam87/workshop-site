import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const RegistrationBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const handleRegistration = () => {
    alert('Registration clicked! Add your registration form or redirect logic here.');
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className="flex items-center justify-center md:h-[45vh] h-[30vh] p-5"
    >
      <div className="relative w-[90vw] md:w-[90vw] bg-gradient-to-br from-blue-900 to-[#000F44] rounded-3xl p-3 text-center overflow-hidden shadow-2xl">
        {/* Floating background effect */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent rounded-full animate-pulse opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-white text-[1.4rem] md:text-4xl font-poppins-bold mb-1 opacity-90">
            Limited to 30 seats only
          </h2>

          <h1 className="text-white text-[1rem] md:text-3xl lg:text-[1.2rem] font-poppins md:mb-7 mb-3 tracking-tight">
            Early birds will get discounts.
          </h1>

          <button
            onClick={handleRegistration}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              bg-white text-blue-900 font-poppins-extraBold text-2xl px-[1.3rem] py-[0.8rem] md:text-4xl lg:text-5xl
              md:px-40 md:py-3 rounded-2xl
              shadow-xl hover:shadow-2xl
              transform transition-all duration-300 ease-out
              uppercase tracking-wider
              ${isHovered ? 'translate-y-[-8px] scale-105 bg-blue-50' : 'translate-y-0 scale-100'}
              active:translate-y-0 active:scale-100
              focus:outline-none focus:ring-4 focus:ring-white/30
            `}
          >
            Register Now!
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-500"></div>
      </div>
    </motion.div>
  );
};

export default RegistrationBanner;
