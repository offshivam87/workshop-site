import React from 'react'
import bottom from '../main photos/bottom.png'
import location from '../loccation.png';
import mail from '../mail.png';
import call from '../call.png';
import fb from '../fb.png';
import insta from '../insta.png';
import yt from '../yt.png';
import { motion } from 'framer-motion'


const MainFooter = () => {
  return (
    <div className='overflow-y-hidden overflow-x-hidden'>
      <div className="img w-full h-[85vh] md:h-[99rem] relative">
        <img src={bottom} alt="" className='w-full h-full object-fill' />

        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} className="absolute top-[5%] md:text-5xl md:top-[3%] w-full text-center text-[1.3rem] font-poppins-bold text-white">
          Hear from happy delegates
        </motion.h2>
        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }} 
          viewport={{ once: false, amount: 0.3 }} className="absolute  top-[10%] md:text-2xl md:top-[6.5%] w-full text-center text-[0.7rem] font-poppins text-white">
          Real stories from our workshop attendees
        </motion.h2>

        <div className="boxes absolute  md:mt-20 flex justify-center items-center gap-2 md:gap-8 top-[15%] md:top-[10%] left-[3%] md:left-[10%]">
          <motion.div
            className="bluebox w-[30vw] h-[28vh] bg-blue-900 md:w-[25vw] md:h-[90vh] rounded overflow-hidden"
            initial={{ opacity: 0, x: -100 }} // left se start
            whileInView ={{ opacity: 1, x: 0 }} // final position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // jitni baar view me aaye utni baar chale
          >
            
          </motion.div>

          <div
            className="bluebox w-[30vw] bg-blue-900 h-[28vh] md:w-[25vw] md:h-[90vh] rounded overflow-hidden"
            initial={{ opacity: 0, x: -100 }} // left se start
            whileInView={{ opacity: 1, x: 0 }} // final position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // jitni baar view me aaye utni baar chale
          >
            
          </div>

          <motion.div
            className="bluebox w-[30vw] bg-blue-900 h-[28vh] md:w-[25vw] md:h-[90vh] rounded overflow-hidden"
            initial={{ opacity: 0, x: 100 }} // left se start
            whileInView={{ opacity: 1, x: 0 }} // final position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // jitni baar view me aaye utni baar chale
          >
            
          </motion.div>

        </div>



        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} className='text-2xl font-poppins-bold text-white md:text-6xl md:left-[37%] md:top-[71%]  text-center absolute top-[70%] left-[31%]'>Contact us</motion.h2>
        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} className='text-[0.7rem] md:text-3xl font-poppins text-white md:left-[22%] md:top-[75%]  text-center absolute top-[75%] left-[9%]'>Neuron Brain & Spine Centre, Gomti Nagar, Lucknow</motion.h2>




        <div className="absolute top-[79%] md:top-[78%] md:mt-7 left-0 w-full flex   gap-2  h-[20%] md:h-[20%] items-center justify-center">
          <div className="1b w-[65vw] flex flex-col gap-1 md:gap-4 justify-center h-[18vh] ">
            <div className='flex gap-1 pr-13 md:mr-40 ' >
              <div className="ic w-28 h-7 md:h-20 md:w-[20vw]">
                <img src={location}




                  alt="" className='w-full h-full object-contain' />
              </div>
              <h2 className='text-[0.5rem] text-white font-poppins md:text-2xl '






              >2, #B, 1, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010,
                Lucknow, Uttar Pradesh 2260102</h2>
            </div>


            <a target='_blanck' href="mailto:info@neuronspine.in?subject=Inquiry&body=Hello, I want to know more about your services."> <div className='flex gap-2  text-center ' >
              <div className="ic w-10 h-7 md:h-20 md:w-[7.5vw] ">
                <img src={mail}




                  alt="" className='w-full h-full object-contain' />
              </div>
              <h2 className='text-[0.7rem] text-white font-poppins my-auto md:text-2xl '




              >Info@neuronspine.in</h2>
            </div>
            </a>

            <a href="tel:+917080106535">

              <div className='flex gap-1 text-center ' >
                <div className="ic w-10 h-7 md:h-20 md:w-[7.5vw]   ">
                  <img src={call}




                    alt="" className='w-full h-full object-contain' />
                </div>
                <h2 className='text-[0.7rem] text-white font-poppins my-auto md:text-2xl '


                >7080106535 | 0522-4248041</h2>
              </div></a>

          </div>

          <div className="1b w-[30vw] h-[14vh] relative p-1 flex flex-col items-center justify-center">
            <h2 className='text-[0.7rem] md:text-3xl font-poppins text-white mt-12'>Follow us On</h2>

            <div className="icons pt-2 flex  gap-2">
              <a target='_blanck' href="https://www.facebook.com/people/Neuron-Brain-Spine-Centre/100091658095606/?ref=pl_edit_xav_ig_profile_page_web#"><img src={fb} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' /></a>


              <a target='_blanck' href="https://www.instagram.com/neuronbrainandspine?utm_source=ig_web_button_share_sheet&igsh=MW1sajcwajd1NGtrbg=="><img src={insta} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' /></a>
              <a target='_blanck' href="https://www.youtube.com/@neuronbrainandspine"><img src={yt} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' /></a>
            </div>
          </div>
        </div>



















      </div>
    </div>
  )
}

export default MainFooter
