import React from 'react'
import { motion } from 'framer-motion'
import comment1 from '../com.png';
import comment2 from '../comment.png';

const PatientTestimonial = () => {
  return (
    <div>
      <h2 className='text-2xl font-poppins-bold pt-8 md:text-6xl md:pb-7  bg-gradient-to-r from-[#72D2E0] to-[#7181E0] text-center'>
        Patient's Testimonial
      </h2>

      <div className="gra w-full md:h-[85vh] h-[85vh] md:pb-15 gap-3 flex flex-col md:flex-row items-center pt-3.5 bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
        
        {/* Left se aane wala image */}
        <motion.div
          className="comment w-[90vw] h-[38vh] md:h-[81vh] md:w-[50vw]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={comment1} alt="" className='w-full h-full object-cover' />
        </motion.div>

        {/* Right se aane wala image */}
        <motion.div
          className="comment w-[90vw] h-[38vh] md:h-[81vh] md:w-[50vw]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={comment2} alt="" className='w-full h-full object-cover' />
        </motion.div>

      </div>
    </div>
  )
}

export default PatientTestimonial
