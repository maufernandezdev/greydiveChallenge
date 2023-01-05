import React from 'react'
import Form from '../components/form/Form'
import formImage from '../assets/form_image.svg'

const Home = () => {
  return (
    <>  
        <section className='container'>
          <h1>Greydive Challenge</h1>
          <h2>Developed by <a href="https://github.com/maufernandezdev/greydiveChallenge" target='_blank'>Mauricio Fernandez</a> </h2>
          <section className='container__form'>
            <img src={formImage} alt="form-image" />
            <Form></Form>
          </section>
        </section>
    </>
    
  )
}

export default Home