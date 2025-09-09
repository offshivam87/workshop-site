import React from 'react'
import Marquee from 'react-fast-marquee'
import gymaunty from '../main photos/gymaunty.png'
import { motion } from 'framer-motion'

const NewsMedia = () => {

  const videos = [
    "https://imagekit.io/player/embed/885310/surgicalVids/Cervical%20Endoscopy%20Forminotomy%20and%20discectomy%20-%20Dr.%20Achal%20Gupta%20-%20Consultant%20Neurosurgeon.mp4?updatedAt=1757321141561&thumbnail=https%3A%2F%2Fik.imagekit.io%2F885310%2FsurgicalVids%2FCervical%2520Endoscopy%2520Forminotomy%2520and%2520discectomy%2520-%2520Dr.%2520Achal%2520Gupta%2520-%2520Consultant%2520Neurosurgeon.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1757321141561&updatedAt=1757321141561",

    "https://imagekit.io/player/embed/885310/surgicalVids/Spine%20explained%20-%20Dr.%20Achal%20Gupta%20-%20Neurosurgeon%20&%20Endoscopic%20Spine%20Surgeon.mp4?updatedAt=1757320318709&thumbnail=https%3A%2F%2Fik.imagekit.io%2F885310%2FsurgicalVids%2FSpine%2520explained%2520-%2520Dr.%2520Achal%2520Gupta%2520-%2520Neurosurgeon%2520%26%2520Endoscopic%2520Spine%2520Surgeon.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1757320318709&updatedAt=1757320318709",

    "https://imagekit.io/player/embed/885310/surgicalVids/Full%20Endoscopic%20Cervical%20Disc%20Excision_%20Laser%20Spine%20Surgery%20-%20Dr.%20Achal%20Gupta%20-%20Endoscopic%20Surgeon.mp4?updatedAt=1757320216952&thumbnail=https%3A%2F%2Fik.imagekit.io%2F885310%2FsurgicalVids%2FFull%2520Endoscopic%2520Cervical%2520Disc%2520Excision_%2520Laser%2520Spine%2520Surgery%2520-%2520Dr.%2520Achal%2520Gupta%2520-%2520Endoscopic%2520Surgeon.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1757320216952&updatedAt=1757320216952",

    "https://imagekit.io/player/embed/885310/surgicalVids/Full%20Endoscopic%20Synovial%20Cyst%20Excision_%20Laser%20Spine%20Surgery%20-%20Dr.%20Achal%20Gupta%20-%20Neuro&Spine%20Surgeon.mp4?updatedAt=1757320112303&thumbnail=https%3A%2F%2Fik.imagekit.io%2F885310%2FsurgicalVids%2FFull%2520Endoscopic%2520Synovial%2520Cyst%2520Excision_%2520Laser%2520Spine%2520Surgery%2520-%2520Dr.%2520Achal%2520Gupta%2520-%2520Neuro%26Spine%2520Surgeon.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1757320112303&updatedAt=1757320112303",

    "https://imagekit.io/player/embed/885310/surgicalVids/Extradural%20hematoma%20surgery_%20Brain%20hemorrhage%20patient%20success%20story%20-%20Dr.%20Achal%20Gupta.mp4?updatedAt=1757321165247&thumbnail=https%3A%2F%2Fik.imagekit.io%2F885310%2FsurgicalVids%2FExtradural%2520hematoma%2520surgery_%2520Brain%2520hemorrhage%2520patient%2520success%2520story%2520-%2520Dr.%2520Achal%2520Gupta.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1757321165247&updatedAt=1757321165247",
  ];
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


      <div className="boxes grid grid-cols-2 md:grid-cols-2 md:h-[130vh]  gap-6 px-4 my-6">
        {/* Box 1 */}
        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[60vh] md:rounded-2xl rounded "
        >
          <img src="https://ik.imagekit.io/885310/workshop/news%20and%20media.png" className=' w-full h-full object-cover object-bottom md:rounded-2xl rounded' alt="" />
        </motion.div>

        {/* Box 2 */}

        <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[60vh] md:rounded-2xl rounded "
        >
          <img src="https://ik.imagekit.io/885310/news/saxas.jpg" className=' w-full h-full object-cover object-bottom md:rounded-2xl rounded' alt="" />
        </motion.div>

         <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[60vh] md:rounded-2xl rounded "
        >
          <img src="https://ik.imagekit.io/885310/news/WhatsApp%20Image%202025-09-09%20at%2013.31.27_ad887a11.jpg" className=' w-full h-full object-cover object-top md:rounded-2xl rounded' alt="" />
        </motion.div>

         <motion.div
          whileHover={{ rotate: -3 }}
          className="w-full h-[12vh] md:h-[60vh] md:rounded-2xl rounded "
        >
          <img src="https://ik.imagekit.io/885310/news/WhatsApp%20Image%202025-09-09%20at%2013.31.27_05d2dc4e.jpg" className=' w-full h-full object-cover object-[center_70%] md:rounded-2xl rounded' alt="" />
        </motion.div>
        
      </div>







      <div className="head"><motion.h2
        className="text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Surgical Videos
      </motion.h2></div>



      <div className="bg w-full h-[25vh] md:h-[65vh]   flex justify-center items-center ">
        <Marquee
          direction="left" // agar left to right chahiye to "right"
          speed={50}
          gradient={false}
          pauseOnHover={true}
          autoFill={true}
          loop={0}
          className="w-[80vw] h-[20vh] md:h-[65vh] flex   justify-center items-center rounded"
        >
          {videos.map((link, index) => (
            <div className="vid w-[75vw] h-[19vh]  md:w-[50vw] md:h-[55vh]   rounded md:rounded-2xl mx-3">

              <div
                key={index}
                className="vid w-[75vw] h-[19vh] md:w-[50vw] md:h-[55vh] bg-black rounded md:rounded-2xl mx-3 overflow-hidden"
              >
                <iframe className='w-full h-full  object-contain' src={link} title="ImageKit video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
              </div>

              {/* yaha tum apna video / content dal sakte ho */}
            </div>))}
        </Marquee>
      </div>


      <div className='w-full md:h-[80vh] md:my-25 h-[30vh] mb-3'>
        <motion.h2
          className="text-2xl md:text-5xl  font-poppins-bold text-center md:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Webinar
        </motion.h2>

        <div className="w-[85vw] h-[20vh] md:w-[80vw]  md:h-[80vh] rounded-2xl mx-auto  mt-5 bg-amber-500 overflow-hidden">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/Q4DxFxgmx1g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


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

            className="boxes w-[30vw] md:w-[22.5vw] md:h-[85vh] rounded-2xl h-[28vh] bg-blue-950">
            <iframe
              className="w-full h-full object-cover rounded-2xl"
              src="https://www.youtube.com/embed/9polkKl7ZPI"
              title="YouTube Shorts Embed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </ motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="boxes w-[30vw] md:w-[22.5vw] md:h-[85vh] rounded-2xl h-[28vh] bg-blue-950">

               <iframe
              className="w-full h-full object-cover rounded-2xl"
              src="https://www.youtube.com/embed/Dw5-RF9f6JE" 
              title="YouTube Shorts Embed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} className="boxes w-[30vw] rounded-2xl md:w-[22.5vw] md:h-[85vh] h-[28vh] bg-blue-950">

               <iframe
              className="w-full h-full object-cover rounded-2xl"
              src="https://www.youtube.com/embed/qrghZC_HJFc"  
              title="YouTube Shorts Embed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </motion.div>
        </div>
      </div>


    </div>
  )
}

export default NewsMedia
