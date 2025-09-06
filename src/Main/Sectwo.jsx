import React from 'react'
import sbg from '../main photos/sbg.png'

import badge from '../main photos/badge.png'
import invertedbadge from '../main photos/badge invert.png'
import doc from '../main photos/doc.png'
import invertdoc from '../main photos/doc invert.png'
import spine from '../main photos/spine.png'
import invertspine from '../main photos/spine invert.png'
import dna from '../main photos/dna.png'
import invertdna from '../main photos/dna invert.png'
import knife from '../main photos/knife .png'
import invertknife from '../main photos/knife invert.png'
import brain from '../main photos/brain.png'
import invertbrain from '../main photos/brain invert.png'
import { motion } from "framer-motion";

import drimg from '../main photos/drimg.png'

const Sectwo = () => {
    const cards = [
        { id: 1, icon: badge, hoverIcon: invertedbadge, text: "1st Rank in Haryana PMT" },
        { id: 2, icon: doc, hoverIcon: invertdoc, text: "MBBS from PGIMS Rohtak" },
        { id: 3, icon: spine, hoverIcon: invertspine, text: "Fellowship in Spine Surgery (NSSA)" },
        { id: 4, icon: dna, hoverIcon: invertdna, text: "DrNB Neurosurgery from LilavatíHospital, Mumbai" },
        { id: 5, icon: knife, hoverIcon: invertknife, text: "University Research Fellow in Genetics & Molecular Medicine" },
        { id: 6, icon: brain, hoverIcon: invertbrain, text: "Hand-picked to lead critical surgeries." },
    ];
    return (
        <div className='overflow-x-hidden'>
            <div className="w-full h-[90vh]  md:h-[205vh] "
                style={{
                    backgroundImage: `url(${sbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className=" w-full md:gap-15  gap-3 flex flex-col items-center pt-4  ">
                    <h2 className='font-poppins-bold text-center mt-3.5 md:mt-12 md:text-6xl text-white text-2xl'>Academic Brilliance</h2>
                    <div className="cards w-full md:h-[40vh] md:mt-10 flex flex-wrap md:flex-nowrap justify-center gap-3 h-auto mt-5 ">
                        {cards.map((card, index) => (
                            <div key={card.id} className="card w-[28vw] md:w-[14vw] md:h-[38vh] px-0.5 flex rounded md:rounded-2xl flex-col items-center h-[15vh] bg-white">


                                <div className="icon my-2 md:w-20 md:h-25 w-12 h-13">
                                    <img
                                        src={card.icon}
                                        alt="icon"
                                        className="w-full h-full object-cover hover:hidden"
                                    />

                                    <img
                                        src={card.hoverIcon}
                                        alt="hover icon"
                                        className="w-full h-full object-cover hidden hover:block"
                                    />
                                </div>
                                <h2 className='text-[0.5rem] md:text-[1.3rem] md:px-3 font-poppins-bold text-center'>{card.text}</h2>

                            </div>
                        ))}




                    </div>
                    <h2 className='font-poppins-bold text-center mt-9 md:mt-12 md:text-6xl text-white text-[1.6rem]'>Why Dr.Achal Gupta ?</h2>
                    <p className='text-[0.7rem] md:text-4xl font-poppins  text-white text-center'> •Top-Notch Qualifications (India's Best Medical Institutes) <br />
                        •Years of Expertise in Brain & Spine Surgeries <br />
                        •1000+ Successful Endoscopic Spine Surgeries <br />
                        •Advanced Minimally Invasive Techniques<br />
                        •National & International Awards + Research Papers<br />
                        •Trusted by Hundreds of Patients Across India</p>

                        <h2 className='font-poppins-bold text-center  md:mt-1 md:text-6xl text-white text-[1.1rem]'>Pioneer in Endoscopic Spine Surgery</h2>

                        <div className='w-[75vw] h-[20vh] md:h-[70vh] absolute top-[175%] md:top-[412%] rounded '>
                            <img src="https://ik.imagekit.io/885310/workshop/dr%20achal%20-%20endo-18.png" className='w-full h-full object-cover object-top rounded-3xl' alt="" />
                        </div>




                </div>


            </div>


        </div>
    )
}

export default Sectwo
