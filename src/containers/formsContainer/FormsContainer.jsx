import React , { useEffect, useState } from 'react'
import FormItem from '../../components/formItem/FormItem'
import getCollection from '../../utils/getCollection'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

const FormsContainer = () => {

  const [forms, setForms] = useState([]);
  useEffect(() => {

    (async () => {
        try{
            const formsCollection = await getCollection('forms');
            const LAST_ID = localStorage.getItem('LAST_ID');
            const lastObject = formsCollection.find(form => form.id == LAST_ID);
            if(lastObject)
            {   
                const orderList = [lastObject];
                const orderFormList = formsCollection.filter(form => form.id !== LAST_ID);
                orderList.push(...orderFormList);
                setForms(orderList);
            }
            else setForms(formsCollection);
        }
        catch (error) {
            console.log(error)
        }
    })();

},[]);
  return (
    <div className='forms__container'>
        <h2>Formularios</h2>
        <div className='link__container'><Link to="/">Inicio <MdKeyboardArrowRight></MdKeyboardArrowRight> </Link></div>
        <div className='forms__items__container'>
        { forms && (
            forms.map(form =>{
                return (
                    <FormItem key={form.id} form={form}></FormItem>
                    )
                })
                )
            }
        </div>
    </div>
  )
}

export default FormsContainer