import React from 'react'
import OwnFooter from '../components/OwnFooter';
import Helmet from 'react-helmet';
import {
  Link
} from "react-router-dom";

export default function Thank() {
  return (
    <div>
    <Helmet bodyAttributes={{style: 'background-color : #ff48b0'}}/>
          <Link to={'/home'} className="link"><h1 className='text_header' >Dicktionary</h1></Link>
    <div className='center_form info'>
<p><span class="bolded">Thank you for submitting your story!</span></p>

<p>We’re sorry that someone was a complete dick towards you.<br/> Here are some things you can do:</p>
<p className='info_list'>
- read other people’s stories (you’re not alone!)<br/>
- get your copy of the dicktionary book<br/>
- join our monthly dicktionary club for snacks, drinks and conversations with fellow bitches and assholes
</p>
    </div>
    
    <OwnFooter color = "#F7C5DD" back="#ff48b0"/>
        </div>
  )
}
