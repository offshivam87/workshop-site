import React from 'react'
import Secone from './Secone'
import Sectwo from './Sectwo'
import Secthree from './Secthree'
import PatientTestimonial from './PatientTestimonial'
import NewsMedia from './NewsMedia'
import Footer from '../home/Footer'
import MainFooter from '../Main/MainFooter'
import ImageSlider from '../home/ImageSlider'


const Main = () => {
  return (
     <div className='overflow-y-hidden overflow-x-hidden'>
        <Secone/>
        {/* <Sectwo/> */}
        <Secthree/>
        <PatientTestimonial/>
        <ImageSlider/>
        <NewsMedia/>
        
        
        <MainFooter/>
        

      
    </div>
  )
}

export default Main
