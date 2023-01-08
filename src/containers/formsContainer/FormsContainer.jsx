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
            const forms = await getCollection('forms');
            const LAST_ID = localStorage.getItem('LAST_ID');
            const lastObject = forms.find(form => form.id == LAST_ID);
            const orderList = [lastObject];
            const orderFormList = forms.filter(form => form.id !== LAST_ID);
            orderList.push(...orderFormList);
            setForms(orderList);
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