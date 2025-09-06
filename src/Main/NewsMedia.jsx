import React from 'react'
import gymaunty from '../main photos/gymaunty.png'
import { motion } from 'framer-motion'

const NewsMedia = () => {
  return (
    <div className=' '>
      <div className="head"><motion.h2
        className="text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        News &  Media
      </motion.h2></div>


      <div className="boxes grid grid-cols-2 md:grid-cols-2 gap-6 px-4 my-6">
        {/* Box 1 */}
        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[40vh] md:rounded-2xl rounded bg-amber-800"
        >
          {/* <img src="https://ik.imagekit.io/885310/workshop/news%20and%20media.png" className='' alt="" /> */}
        </motion.div>

        {/* Box 2 */}
        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[40vh] md:rounded-2xl rounded bg-amber-800"
        ></motion.div>

        {/* Box 3 */}
        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[40vh] md:rounded-2xl rounded bg-amber-800"
        ></motion.div>

        {/* Box 4 */}
        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[40vh] md:rounded-2xl rounded bg-amber-800"
        ></motion.div>
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

      <div className="boxes flex  gap-10 my-4 items-center ">
        <motion.div
          className="b1 w-[60vw] rounded-2xl mb-7 md:mb-25 h-[20vh] md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]"

        >
          <motion.div whileHover={{ rotate: -3 }} className="b1 w-[60vw] h-[20vh] rounded-2xl md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
            <img
              src={gymaunty}
              alt=""
              className="w-full rounded-2xl h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>


        <motion.div
          className="b1 w-[60vw] rounded-2xl mb-7 md:mb-25 h-[20vh] md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]"

        >
          <motion.div whileHover={{ rotate: -3 }} className="b1 w-[60vw] h-[20vh] rounded-2xl md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
            <img
              src={gymaunty}
              alt=""
              className="w-full rounded-2xl h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>


        <motion.div
          className="b1 w-[60vw] rounded-2xl mb-7 md:mb-25 h-[20vh] md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]"

        >
          <motion.div whileHover={{ rotate: -3 }} className="b1 w-[60vw] h-[20vh] rounded-2xl md:h-[65vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
            <img
              src={gymaunty}
              alt=""
              className="w-full rounded-2xl h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>


      <div className=" w-full h-[40vh] md:h-[110vh] ">
        <div className="head"><motion.h2
          className="text-2xl md:text-5xl  font-poppins-bold text-center md:mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Voices of the Faculty
        </motion.h2>
        
        <motion.h2
          className="text-[1rem] md:text-2xl md:mb-12  mb-3 font-poppins text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Real words from Doctors Accross India
        </motion.h2>
        
        </div>


        <div className=" flex md:gap-10 gap-3 justify-center">

        <motion.div
        initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        
        className="boxes w-[30vw] md:w-[25vw] md:h-[85vh] rounded h-[28vh] bg-blue-950"></ motion.div>
        <motion.div
        initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
           className="boxes w-[30vw] md:w-[25vw] md:h-[85vh] rounded h-[28vh] bg-blue-950"></motion.div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }} className="boxes w-[30vw] md:w-[25vw] md:h-[85vh] rounded h-[28vh] bg-blue-950"></motion.div>
        </div>
      </div>


    </div>
  )
}

export default NewsMedia
