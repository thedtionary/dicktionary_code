import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../App.css'
import OwnFooter from '../components/OwnFooter'
import Helmet from 'react-helmet';
import {
  Link
} from "react-router-dom";

export default function Info() {




  return (
    <div>
<Helmet bodyAttributes={{style: 'background-color : #ff48b0'}}/>
      <Link to={'/home'} className="link"><h1 className='text_header' >Dicktionary</h1></Link>
<div className='center_form info'>
<p>
<span class="bolded">Dicktionary </span>
 is a project inspired by countless experiences of verbal
harassment online and offline.
</p>
<p>
Its purpose is to show other
women, that these terms do not define them in a negative way. On the
contrary, they exemplify their strength, beauty, empathy, and
independence, which others have found difficult to come to terms with.
</p>
Dicktionary is a safe space in which you can  <Link to={'/form'} className="link"><span class="bolded"> share your own story</span></Link> or
simply find strength in those of others.
</div>

<OwnFooter color = "#F7C5DD" back="#ff48b0"/>
    </div>
  )
}
