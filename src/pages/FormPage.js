import React from 'react'
import Form from '../components/Form'
import OwnFooter from '../components/OwnFooter';
import {
  Link
} from "react-router-dom";

export default function FormPage() {
  return (
    <>
    <body >
    <Link to={'/info'} className="link"><h1 className='text_header'>Dicktionary</h1></Link>
        <div className='center_form'>     
        <Form></Form>
        
        </div>
       
    </body>
    <OwnFooter color = "#F7C5DD"/>
    </>
  )
}
