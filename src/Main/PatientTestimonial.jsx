import React from 'react'
import { motion } from 'framer-motion'
import comment1 from '../com.png';
import comment2 from '../comment.png';

const PatientTestimonial = () => {
  return (
    <div className='overflow-y-hidden'>
      <h2 className='text-2xl font-poppins-bold pt-8 md:text-6xl md:pb-7  bg-gradient-to-r from-[#72D2E0] to-[#7181E0] text-center'>
        Doctor's Testimonial
      </h2>

      <div className="gra w-full md:h-[50vh] h-[20vh] md:pb-15 gap-3 flex justify-center md:flex-row items-center pt-3.5 bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
        
        {/* Left se aane wala image */}
        <motion.div
          className="comment w-[60vw] h-[18vh] md:h-[55vh] md:w-[30vw]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="https://ik.imagekit.io/885310/Homee%20_Recove-05.png" alt="" className='w-full h-full object-contain' />
        </motion.div>

        {/* Right se aane wala image */}
         <motion.div
          className="comment w-[60vw] h-[18vh] md:h-[55vh] md:w-[30vw]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="https://ik.imagekit.io/885310/doc%20test-06.png" alt="" className='w-full h-full object-contain' />
        </motion.div>

        <motion.div
          className="comment w-[60vw] h-[18vh] md:h-[55vh] md:w-[30vw]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="https://ik.imagekit.io/885310/doc%20test-07.png" alt="" className='w-full h-full object-contain' />
        </motion.div>

         

      </div>
    </div>
  )
}

export default PatientTestimonial
