import React from 'react'
import bgimg from '../main photos/blured.png'
import achal from '../achal.png'
import semicicular from '../main photos/semi circular.png'


const Secone = () => {
  return (
    <div >
    <div className='w-full md:h-[160vh] h-[58vh]  overflow-x-hidden  overflow-y-hidden  relative flex justify-center '>
        <img src={bgimg} alt="" className='w-full   h-full object-cover' />
        <div className="achal  w-[85vw] md:w-[48vw]  h-[40vh] md:h-[95vh] md:top-[10%]  absolute top-[20%]">
            <img src={achal} alt=""  className='w-full h-full object-cover'/>
        </div>

        <div className="achal  w-[125vw] h-[13vh] md:w-[108vw] md:h-[35vh] md:top-[60%]   absolute top-[80%]">
            <img src={semicicular} alt=""  className='w-full h-full object-fill'/>
          
        </div>
        <div className="w-full h-[20vh] bg-[]"></div>
         
                <h2 className='text-2xl text-white md:text-6xl   mx-auto font-poppins-bold text-center md:top-[78%] absolute top-[88%]'>Dr. Achal Gupta</h2>
                <p className='text-[0.55rem] text-white md:text-2xl  mx-auto font-poppins-bold text-center md:top-[86%] absolute top-[96%]'>A distinguished Brain and Endoscopic Spine Surgeon based in Lucknow, </p>


                
    </div>
    </div>
  )
}

export default Secone
