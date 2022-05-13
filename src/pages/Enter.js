import React from 'react'
import Helmet from 'react-helmet';
import logo from '../images/anime.gif'
import {
    Link
  } from "react-router-dom";

export default function Enter() {
  return (
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ff48b0'}}/>
        <div className='center_dick'>
        <Link 
to="/home" > 
          <img 
            src={logo}
            alt="example"
        
          />
        </Link>
        </div>
    </div>
  )
}
