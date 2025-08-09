import React from 'react'
import graph from '../main photos/graph.png'

const Secthree = () => {
    return (
        <div className='mt-'>
            <h2 className='text-[1.1rem] mt-27 md:mt-[40rem] md:text-5xl font-black md:pt-7 text-center text-black my-3 font-poppins'>What is Endoscopic Spine Surgery?</h2>
            <p className='text-[0.8rem] px-5 md:text-2xl md:px-15 font-poppins my-2 text-center'>Endoscopic spine surgery is a minimally invasive technique using a small camera-equipped tube to access the spine through a tiny incision, causing minimal tissue disruption.It offers faster recovery and less pain compared to traditional open surgery.

            </p>

            <div className="img w-[89vw] h-[20vh] md:h-[85vh] my-3 mx-auto ">
                <img src={graph} alt="" className='w-full h-full object-cover'  />
            </div>

            <div className="why">
                <h2 className='text-2xl font-poppins-bold md:text-5xl md:my-10 text-center font-black'>Why Dr. Achal Gupta?</h2>

                <div className='w-full h-[18vh] md:h-[50vh] md:pl-[15rem] flex flex-col gap-2 '>
                <ul className=" list-disc    font-poppins font-bold my-4 list-inside text-left">
                    <li className="text-[0.7rem] md:mb-4 md:text-4xl mx-auto px-3 font-bold font-poppins">
                        Top Notch Qualifications (India's Best Medical Institutes)
                    </li>
                    <li className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3">
                        Years of Expertise in Brain and Spine Surgeries
                    </li>
                    <li className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3">
                        1000+ Successful Endoscopic Spine Surgeries
                    </li>
                    <li className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3">
                        Advanced Minimally Invasive Techniques
                    </li>

                    <li className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3">
                        National and International Awards+Research Papers
                    </li>
                    <li className="text-[0.7rem] md:mb-4 md:text-4xl md:mx-auto px-3">
                        Trusted by Hundreds of Patient Accross India
                    </li>
                </ul>
                </div>
            </div>

        </div>
    )
}

export default Secthree
