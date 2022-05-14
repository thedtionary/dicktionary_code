import React from 'react'
import {
  Link
} from "react-router-dom";

 function OwnFooter(props) {
  return (
  
    <div className='footer_container' style={{backgroundColor: props.back}}>
              <Link to={'/info'} style={{
                 textDecoration: 'none', 
                 color: props.color,
                 }}  className={'footer'}>find out more about dicktionary.uk</Link>
    </div>
  )
}

OwnFooter.propTypes = {}

export default OwnFooter