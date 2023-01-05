import React from 'react'
import './formItem.css'

const FormItem = ({form}) => {
  const {id, full_name , email, birth_date, country_of_origin} = form;
  return (
    <>
      <div className='form__item'>
        <h4>{`{ id: ${id},`}</h4>
        <h4>{`full_name: ${full_name},`}</h4>
        <h4>{`email: ${email},`}</h4>
        <h4>{`birth_date: ${birth_date},`}</h4>
        <h4>{`country_of_origin: ${country_of_origin} }`}</h4>
      </div>
    </>
  )
}

export default FormItem