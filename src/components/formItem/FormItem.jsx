import React from 'react'
import './formItem.css'

const FormItem = ({form}) => {
  const {id, full_name , email, birth_date, country_of_origin} = form;

  return (
    <>
      <div className='form__item'>
        <h4>Your ID #{id.toString().slice(0,3)}...{id.toString().slice(-4)}</h4>
        <h5>{`full_name: ${full_name}`}</h5>
        <h5>{`email: ${email}`}</h5>
        <h5>{`birth_date: ${birth_date}`}</h5>
        <h5>{`country_of_origin: ${country_of_origin}`}</h5>
      </div>
    </>
  )
}

export default FormItem