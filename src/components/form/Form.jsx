import React from 'react'
import { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm';
import sendForm from '../../utils/sendForm';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './form.css';
import { items } from '../../db/db.json'

const Form = () => {

    const navigate = useNavigate();
    const [fields, setFields] = useState([]);
    const [initialForm, setInitialForm] = useState({});
    const [selectOptions, setSelectOptions] = useState([]);

    const notifySuccess = (text) => toast.success(text,{
        duration: 1500,
        style: {
            fontFamily:'ui-monospace, Menlo, Monaco, Cascadia Mono, Segoe UI Mono, Roboto Mono, Oxygen Mono, Ubuntu Monospace, Source Code Pro, Fira Mono, Droid Sans Mono, Courier New, monospace'},
        },
    );
    
    const notifyError = (text) => toast.error(text,{
    duration: 2000,
    style: {
        fontFamily:'ui-monospace, Menlo, Monaco, Cascadia Mono, Segoe UI Mono, Roboto Mono, Oxygen Mono, Ubuntu Monospace, Source Code Pro, Fira Mono, Droid Sans Mono, Courier New, monospace'},
    },
    );

    useEffect(() => {
        setFields(items);
        setInitialFormBasedOnDbItems(items);
    },[]);

    const handleSubmit = async (e) =>
    {   
        e.preventDefault();
        const now = new Date().toISOString().slice(0,10);
        if(values.birth_date > now)
        {
            notifyError('Fecha mayor a dia actual!');
            return;
        }

        const response = await sendForm(values);
        if(response.id)
        {
            notifySuccess('Formulario enviado!');
            return setTimeout(() => {
                navigate('/forms');
            }, 1500);
        }
        return notifyError(response.error);
    }

    const setInitialFormBasedOnDbItems = (items) =>
    {   
        const initialForm = {}
        for (const item in items) 
        {
            if (items.hasOwnProperty.call(items, item))
            {
                const element = items[item];
                if(element.name) {initialForm[element.name] = ''};
                if(element.type === 'select')
                {
                    const options = element.options;
                    if(options.length > 0)
                    {   
                        const countries = [{
                            "label": "Seleccione un pais",
                            "value": ""
                        },];   
                        setSelectedOption(countries[0].value);
                        options.forEach(element => {
                            countries.push(element);
                        });
                        setSelectOptions(countries)
                    }
                }
            }
        }
        setInitialForm(initialForm)
    }

    const handleChange = (e) =>
    { 
        const value = e.target.value;
        setSelectedOption(value);
        handleInputChange(e);
    }

    const { values , handleInputChange , handleBlur} = useForm(initialForm);
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <>
            <form onSubmit={handleSubmit}>
            {
                fields && (
                    fields.map((field, index) =>{
                        return(
                            <div key={index}>
                                { field.type !== 'submit' ? <label data={field.name}>{field.label} </label> : null }
                                { field.type === 'select' ? <select name={field.name} onChange={e => handleChange(e)} value={selectedOption} required={field.required}> { 
                                        selectOptions && (selectOptions.map((option) => (<option key={option.value} value={option.value}> {option.label} </option>)))
                                    } </select> :
                                    <input 
                                        name={field.name}
                                        onChange={e => handleInputChange(e)}
                                        onBlur={handleBlur} 
                                        type={field.type} 
                                        placeholder={field.label} 
                                        required={field.required}>
                                    </input>
                                }
                            </div> 
                        )
                    })
                )
            }
            </form>
            <Toaster position="bottom-center"/>
        </>
    )
}

export default Form