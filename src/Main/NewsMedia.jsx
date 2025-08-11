import React from 'react'
import gymaunty from '../main photos/gymaunty.png'
import { motion } from 'framer-motion'

const NewsMedia = () => {
  return (
    <div>
      <div className="head"><motion.h2
      className="text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      News &  Media
    </motion.h2></div>

      <div className="boxes flex flex-col gap-10 my-4 items-center ">
        <div className="b1 w-[85vw]  rounded-2xl mb-7 md:mb-25   h-[20vh] md:h-[60vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "> <motion.div whileHover={{ rotate: -3 }} className="b1 w-[85vw] h-[20vh] rounded-2xl md:h-[60vh] bg-amber-800 "></motion.div></div>
      </div>

      <div className="boxes flex flex-col gap-10 my-4 items-center ">
        <div className="b1 w-[85vw]  rounded-2xl mb-7 md:mb-25   h-[20vh] md:h-[60vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "> <motion.div whileHover={{ rotate: -3 }} className="b1 w-[85vw] h-[20vh] rounded-2xl md:h-[60vh] bg-amber-800 "></motion.div></div>
      </div>



      <div className="head"><motion.h2
      className="text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      Blogs
    </motion.h2></div>

      <div className="boxes flex flex-col gap-10 my-4 items-center ">
        <motion.div
          className="b1 w-[85vw] rounded-2xl mb-7 md:mb-25 h-[20vh] md:h-[90vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]"
          
        >
          <motion.div whileHover={{ rotate: -3 }} className="b1 w-[85vw] h-[20vh] rounded-2xl md:h-[90vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
            <img
              src={gymaunty}
              alt=""
              className="w-full rounded-2xl h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>


    </div>
  )
}

export default NewsMedia
