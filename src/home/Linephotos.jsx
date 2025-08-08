import React from 'react'
import Marquee from 'react-fast-marquee'
import one from '../facultyphotos/1.png'
import two from '../facultyphotos/2.png'
import three from '../facultyphotos/3.png'
import four from '../facultyphotos/4.png'
import five from '../facultyphotos/dr anoop kumar.png'
import six from '../facultyphotos/dr arvind kumar.png'
import seven from '../facultyphotos/dr asheesh tabdon.png'
import eight from '../facultyphotos/dr ashutosh kumar.png'
import nine from '../facultyphotos/dr ashutosh shukla.png'
import ten from '../facultyphotos/dr bhupesh patel.png'
import eleven from '../facultyphotos/dr deepak kumar singh.png'
import twelve from '../facultyphotos/dr kaushaldeep.png'
import thirteen from '../facultyphotos/dr lavkush pandey.png'
import fourteen from '../facultyphotos/dr mohd kaif.png'
import fifteen from '../facultyphotos/dr op singh.png'
import sixteen from '../facultyphotos/dr pramod chaurasiya.png'
import seventeen from '../facultyphotos/dr saidilip.png'
import eighteen from '../facultyphotos/dr somil jaiswal.png'
import nineteen from '../facultyphotos/dr sukumar.png'
import twenty from '../facultyphotos/dr sumeet pawar.png'
import twentyone from '../facultyphotos/dr sunil singh.png'
import twentytwo from '../facultyphotos/dr suyash.png'
import twentythree from '../facultyphotos/dr varun aggarwal.png'
import twentyfour from '../facultyphotos/dr. dk vatsal.png'
import twentyfive from '../facultyphotos/dr. ishant.png'
import twentysix from '../facultyphotos/dr.eshwar.png'
import twentyseven from '../facultyphotos/dr.jalaj.png'
import twentyeight from '../facultyphotos/dr.jayant gaud.png'
import twentynine from '../facultyphotos/dr.jayesh sardhara.png'
import thirty from '../facultyphotos/dr.kalyan.png'
import thirtyone from '../facultyphotos/dr.prasad patgaonkar.png'



const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen
    , sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone
]

const Linephotos = () => {
    return (
        <div className="relative my-4 w-full flex justify-center items-center h-[18vh] md:h-[40vh] px-3.5">

            {/* Left blur */}
            <div className="absolute inset-y-[-10%] left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

            {/* Right blur */}
            <div className="absolute inset-y-[-10%] right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <Marquee>
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="w-[35vw] mr-5 rounded h-[20vh] md:w-[20vw] md:h-[45vh]"
                    >
                        <img
                            src={imgSrc}
                            alt={`faculty-${index}`}
                            className="w-full rounded h-full object-cover object-top"
                        />
                    </div>
                ))}
            </Marquee>
        </div>


    )
}

export default Linephotos