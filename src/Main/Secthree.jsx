import React from 'react'
import { motion } from 'framer-motion'
import graph from '../main photos/graph.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const Secthree = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden '>
      {/* Heading */}
      <motion.h2
        className='text-[1.1rem] mt-27 md:mt-[5rem] md:text-5xl font-black md:pt-7 text-center text-black my-3 font-poppins'
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        What is Endoscopic Spine Surgery?
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className='text-[0.8rem] px-5 md:text-2xl md:px-15 font-poppins my-2 text-center'
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Endoscopic spine surgery is a minimally invasive technique using a small camera-equipped tube to access the spine through a tiny incision, causing minimal tissue disruption. It offers faster recovery and less pain compared to traditional open surgery.
      </motion.p>

      {/* Image */}
      <motion.div
        className="img w-[89vw] h-[20vh] md:h-[85vh] my-3 mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={graph} alt="" className='w-full h-full object-cover' />
      </motion.div>

      {/* Why Section */}
      {/* <motion.div
        className="why"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className='text-2xl font-poppins-bold md:text-5xl md:my-10 text-center font-black'>
          Why Dr. Achal Gupta?
        </h2>

        <div className='w-full h-[18vh] md:h-[50vh] md:pl-[15rem] flex flex-col gap-2'>
          <ul className="list-disc font-poppins font-bold my-4 list-inside text-left">
            {[
              "Top Notch Qualifications (India's Best Medical Institutes)",
              "Years of Expertise in Brain and Spine Surgeries",
              "1000+ Successful Endoscopic Spine Surgeries",
              "Advanced Minimally Invasive Techniques",
              "National and International Awards+Research Papers",
              "Trusted by Hundreds of Patient Accross India"
            ].map((text, index) => (
              <motion.li
                key={index}
                className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div> */}
    </div>
  )
}

export default Secthree
