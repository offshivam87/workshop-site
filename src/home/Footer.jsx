import React from 'react';
import { motion } from 'framer-motion';
import footer from '../footer.png';
import comment1 from '../com.png';
import comment2 from '../comment.png';
import location from '../loccation.png';
import mail from '../mail.png';
import call from '../call.png';
import fb from '../fb.png';
import insta from '../insta.png';
import yt from '../yt.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

const Footer = () => {
  return (
    <div className="relative w-full  overflow-y-hidden ">
      <img src={footer} alt="footer" className="w-full h-full object-fill" />

      <div
        className="absolute top-[5%] left-0 w-full flex flex-col gap-1 items-center justify-center"




      >
        <h2 className="text-black text-2xl md:text-6xl font-poppins-bold text-center">
          From the Learners
        </h2>
        <h3 className="text-white mx-2.5 text-[0.6rem] md:text-[1.2rem] font-poppins text-center">
          Real feedback from hands-on sessions, live surgeries, and insightful discussions.
        </h3>
      </div>

      <div className="absolute top-[18%] md:top-[13%] left-0 w-full flex gap-5 items-center justify-center">
        {["https://ik.imagekit.io/885310/deleg-08.png", "https://ik.imagekit.io/885310/deleg-09.png"].map((img, i) => (
          <div
            key={i}
            className="box w-[41vw] h-[15vh] md:h-[80vh] group transition duration-200 ease-in-out hover:scale-[1.03]"




            custom={i * 0.2}
          >
            <img src={img} alt="" className="w-full h-full object-contain rounded" />
          </div>
        ))}

        {/* Contact Us Section */}
        <div
          className="absolute top-[5%] mt-40 md:top-[90%] left-0 w-full flex flex-col items-center justify-center"





        >
          <h2 className="text-white text-[1rem] md:text-6xl font-poppins-bold text-center">Contact us</h2>
          <h3 className="text-white mx-2.5 text-[0.6rem] md:text-[1.5rem] font-poppins text-center">
            Neuron Brain & Spine Centre, Gomti Nagar, Lucknow
          </h3>
        </div>

        <div className="absolute top-[135%] md:top-[125%] md:mt-7 left-0 w-full flex   gap-2  h-[115%] md:h-[80%] items-center justify-center">
          <div className="1b w-[65vw] flex flex-col gap-2 md:gap-4 justify-center h-[18vh] ">
           <div className='flex gap-2  text-center ' >
              <div className="ic w-10 h-7 md:h-20 md:w-[7.5vw] ">
                <img src={location}




                  alt="" className='w-full h-full object-contain' />
              </div>
              <h2 className='text-[0.6rem] text-white font-poppins my-auto md:text-[1.6rem] '




              >#B, 1, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</h2>
            </div>


            <div className='flex gap-2  text-center ' >
              <div className="ic w-10 h-7 md:h-20 md:w-[7.5vw] ">
                <img src={mail}




                  alt="" className='w-full h-full object-contain' />
              </div>
              <h2 className='text-[0.6rem] text-white font-poppins my-auto md:text-[1.6rem] '




              >achalgupta12@gmail.com</h2>
            </div>

            <a href="tel:+9195598 82889">
            
                          <div className='flex gap-1 text-center ' >
                            <div className="ic w-10 h-7 md:h-20 md:w-[7.5vw]   ">
                              <img src={call}
            
            
            
            
                                alt="" className='w-full h-full object-contain' />
                            </div>
                            <h2 className='text-[0.7rem] text-white font-poppins my-auto md:text-[1.6rem]'
            
            
                            >+91 95598 82889 | <br />
                            Himanshu 
                            </h2>
                            <h2 className='text-[0.7rem] text-white font-poppins my-auto md:text-[1.6rem]'
            
            
                            >+91 90048 58393 <br />
                            Dr Achal
                            </h2>
                          </div></a>
            

          </div>

          <div className="1b w-[30vw] h-[14vh] relative p-1 flex flex-col items-center justify-center">
            <h2 className='text-[0.7rem] md:text-3xl font-poppins text-white mt-12'>Follow us On</h2>

            <div className="icons pt-2 flex  gap-2">
              <img src={fb} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' />


              <img src={insta} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' />
              <img src={yt} alt="facebook"


                className='w-[8vw] md:h-[8vh] md:w-[3.8vw]' />
            </div>
          </div>



        </div>


      </div>
    </div>
  )
}

export default Footer
