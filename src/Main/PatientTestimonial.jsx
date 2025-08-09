import React from 'react'
import comment1 from '../com.png';
import comment2 from '../comment.png';

const PatientTestimonial = () => {
  return (
    <div>
      <h2 className='text-2xl font-poppins-bold pt-8 md:text-6xl md:pb-7  bg-gradient-to-r from-[#72D2E0] to-[#7181E0] text-center'>Patient's Testimonial</h2>
      <div className="gra w-full md:h-[80vh] h-[80vh]   gap-3 flex flex-col md:flex-row items-center pt-3.5 bg-gradient-to-r from-[#72D2E0] to-[#7181E0]">
        
        <div className="comment w-[90vw] h-[35vh] md:h-[81vh] md:w-[50vw]  ">
          <img src={comment1} alt="" className='w-full h-full object-cover' />
        </div>

        <div className="comment w-[90vw] h-[35vh] md:h-[81vh] md:w-[50vw] ">
          <img src={comment2} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
      
      
    </div>
  )
}

export default PatientTestimonial
