import React, { useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false);
    const [isDoc, setDoc] = useState(false);
    const [isSpine, setSpine] = useState(false);
    const [isBrain, setBrain] = useState(false);
    const [isDna, setDna] = useState(false);
    const [isKnife, setKnife] = useState(false);

    return (
        <div>
            <div className="blue w-full  bg-[#000F44] md:rounded-t-sm  relative">
                <p className='text-[0.6rem] text-white md:text-[1.2rem]  md:pb-10 mx-auto font-poppins text-center'>
                    known for pioneering minimally invasive techniques that reduce <br />
                    recovery time and improve outcomes. <br />
                    With expertise in both neurosurgery and endoscopic spine procedures,
                    <br />
                    he has become a trusted name across India, combining precision <br />
                    with compassionate patient care.
                </p>

                <motion.div
                    className="h2 text-white md:text-5xl text-center font-poppins-bold my-6 text-2xl"
                    initial={{ opacity: 0, y: 50, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Academic Brilliance
                </motion.div>

                <div>

                    <div className="cards w-[85vw] flex flex-col items-center md:flex-row md:justify-center md:gap-10 mx-auto my-3 ">
                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}

                        >
                            <div
                                className="img w-[28vw] md:w-[10vw] md:h-[26vh]  mt-5 h-[18vh]   bg-no-repeat bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${isHovered ? invertedbadge : badge})`
                                }}

                            >
                            </div>
                            <h2 className='text-2xl text-center  font-poppins-bold text-black'>1st Rank in <br /> Haryana PMT </h2>
                        </div>


                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setDoc(true)}
                            onMouseLeave={() => setDoc(false)}

                        >
                            <div
                                className="img w-[28vw] md:w-[10vw] md:h-[25vh] mt-5 h-[18vh] bg-no-repeat bg-center bg-cover transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${isDoc ? invertdoc : doc})`
                                }}

                            >
                            </div>
                            <h2 className='text-2xl text-center font-poppins-bold text-black'>MBBS from  <br /> PGIMS Rohtak</h2>
                        </div>


                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setSpine(true)}
                            onMouseLeave={() => setSpine(false)}

                        >
                            <div
                                className="img w-[30vw] md:w-[12vw] md:h-[25vh] mt-5 h-[18vh] bg-no-repeat bg-center bg-cover transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${isSpine ? invertspine : spine})`
                                }}

                            >
                            </div>
                            <h2 className='text-2xl text-center font-poppins-bold text-black'>Fellowship in <br /> Spine Surgery (NSSA)</h2>
                        </div>
                    </div>

                    <div className="cards w-[85vw] flex flex-col items-center md:flex-row md:justify-center md:gap-10 mx-auto my-3 ">


                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setBrain(true)}
                            onMouseLeave={() => setBrain(false)}

                        >
                            <div
                                className="img w-[28vw] md:w-[10vw] md:h-[25vh] mt-5 h-[18vh] bg-no-repeat bg-center bg-cover transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${isBrain ? invertbrain : brain})`
                                }}

                            >
                            </div>
                            <h2 className='text-[1.5rem] text-center font-poppins-bold text-black'>DrNB Neurosurgery  <br />from Lilavati Hospital <br />Mumbai</h2>
                        </div>


                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setDna(true)}
                            onMouseLeave={() => setDna(false)}

                        >
                            <div
                                className="img w-[28vw] md:w-[10vw] md:h-[25vh] mt-5 h-[18vh] bg-no-repeat bg-center bg-cover transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${isDna ? invertdna : dna})`
                                }}

                            >
                            </div>
                            <h2 className='text-[1.5rem] text-center font-poppins-bold text-black'>University Research Fellow <br />in Genetics & Molecular Medicine</h2>
                        </div>


                        <div className="box w-[65vw] md:w-[25vw] md:h-[55vh] transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2  rounded-2xl flex gap-3 md:gap-5 flex-col items-center my-3.5 h-[40vh] bg-white"
                            onMouseEnter={() => setKnife(true)}
                            onMouseLeave={() => setKnife(false)}

                        >
                            <div
                                className="img w-[30vw] md:w-[12vw] md:h-[25vh] mt-5 h-[18vh] bg-no-repeat bg-center bg-cover transition-all duration-300"
                                style={{
                                    backgroundImage: `url(${isKnife ? invertknife : knife})`
                                }}

                            >
                            </div>
                            <h2 className='text-[1.5rem] text-center font-poppins-bold text-black'>Hand-picked to<br /> lead critical surgeries. </h2>
                        </div>
                    </div>
                </div>

                <motion.h2
                    className="text-[1.3rem] md:text-5xl mt-6 text-white text-center font-poppins-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                >Pioneer in Endoscopic Spine Surgery</motion.h2>
                <div className="cl w-full h-[15vh]"></div>
                <div className="shi w-full md:h-[98vh] my-3 absolute -bottom-[5%] md:top-[93%] rounded h-[25vh] mx-auto mt-3.5 mb-4 ">
                    <img src={drimg} alt="" className='w-full rounded-2xl h-full  object-top object-cover' />
                </div>
            </div>



        </div>
    )
}

export default Sectwo
