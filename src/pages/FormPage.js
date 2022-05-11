import React from 'react'
import Form from '../components/Form'
import { useEffect } from "react";
import OwnFooter from '../components/OwnFooter';
import { useHistory } from "react-router-dom";
import {
  Link
} from "react-router-dom";



export default function FormPage() {

  let history = useHistory();
useEffect(() => {
  return history.listen((location) => { 
     console.log(`You changed the page to: ${location.pathname}`) 
  }) 
},[history])  

  return (
    <>
    <body >
    <Link to={'/'} className="link"><h1 className='text_header' >Dicktionary</h1></Link>
        <div className='center_form'>     
        <Form></Form>
        
        </div>
       
    </body>
    <OwnFooter color = "#F7C5DD"/>
    </>
  )
}
