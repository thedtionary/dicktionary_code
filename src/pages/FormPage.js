import React from 'react'
import Form from '../components/Form'
import { useEffect } from "react";
import OwnFooter from '../components/OwnFooter';
import Helmet from 'react-helmet';
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
    <div >
    <Helmet bodyAttributes={{style: 'background-color : #ff48b0'}}/>
    <Link to={'/home'} className="link"><h1 className='text_header' >Dicktionary</h1></Link>
        
        <div className='center_form'>     
        <Form></Form>
        
        </div>
       
    </div>
    <OwnFooter color = "#F7C5DD" back= "#ff48b0"/>
    </>
  )
}
