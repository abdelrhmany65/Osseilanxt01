import React from 'react'
import Contactgrid from '@/app/components/formContact/Contactgrid'
import FormContact from '../components/formContact/FormContact'
import Experience from '../components/experience/Experience'
import TestimonialSlider from '../components/[sliders]/testimonial/TestimonialSlider'

function Contactpage() {
  return (
    <>
      <Contactgrid />
      <FormContact />
      <section>
        <Experience />
      </section>
      <TestimonialSlider />
    </>
  )
}

export default Contactpage