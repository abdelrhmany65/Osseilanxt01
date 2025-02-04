import React from 'react'
import ServicePage from '../components/[sliders]/Service/ServicePage'
import ChoseUs from '../components/chose/ChoseUs'
import Projects from '../components/Projects/Projects'
import FormContact from '../components/formContact/FormContact'

const Servicespage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ServicePage />
      <ChoseUs />
      <Projects />
      <section>
        <FormContact />
      </section>
    </div>
  )
}

export default Servicespage
