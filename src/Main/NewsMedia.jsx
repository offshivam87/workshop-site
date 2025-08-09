import React from 'react'
import gymaunty from '../main photos/gymaunty.png'

const NewsMedia = () => {
  return (
    <div>
        <div className="head"><h2 className='text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5'>News & Media</h2></div>

        <div className="boxes flex flex-col gap-10 my-4 items-center ">
            <div className="b1 w-[85vw] rounded-2xl mb-7 md:mb-25 -rotate-5  h-[20vh] md:h-[60vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "> <div className="b1 w-[85vw] h-[20vh] rounded-2xl rotate-5 md:h-[60vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "></div></div>
        </div>

        <div className="boxes flex flex-col my-4 items-center ">
            <div className="b1 w-[85vw] rounded-2xl -rotate-5  h-[20vh] md:h-[60vh] bg-gradient-to-r bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "> <div className="b1 w-[85vw] h-[20vh] rounded-2xl rotate-5 md:h-[60vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "></div></div>
        </div>


        <div className="head"><h2 className='text-2xl md:text-5xl md:my-15 font-poppins-bold text-center my-5'>Blogs</h2></div>

        <div className="boxes flex flex-col gap-10 my-4 items-center ">
            <div className="b1 w-[85vw] rounded-2xl mb-7 md:mb-25 -rotate-5  h-[20vh] md:h-[90vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] "> <div className="b1 w-[85vw] h-[20vh] rounded-2xl rotate-5 md:h-[90vh] bg-gradient-to-r from-[#72D2E0] to-[#7181E0] ">
                <img src={gymaunty} alt="" className='w-full rounded-2xl h-full object-cover object-top' />
                </div></div>
        </div>

      
    </div>
  )
}

export default NewsMedia
