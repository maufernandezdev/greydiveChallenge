import React , { useEffect, useState }from 'react'
import FormItem from '../../components/formItem/FormItem'
import getCollection from '../../utils/getCollection'
// import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';

const FormsContainer = () => {

  const [forms, setForms] = useState([]);
  useEffect(() => {

    (async () => {
        try{
            const forms = await getCollection('forms');
            setForms(forms);
        }
        catch (error) {
            console.log(error)
        }
    })();

},[]);
  return (
    <div className='forms__container'>
        <h2>Formularios</h2>
        <div className='link__container'><Link to="/">Inicio</Link></div>
        { forms && (
            forms.map(form =>{
                return (
                    <FormItem key={form.id} form={form}></FormItem>
                )
            })
        )

        }
    </div>
  )
}

export default FormsContainer