import React from 'react'
import {
  Link
} from "react-router-dom";

 function OwnFooter(props) {
  return (
    <div className='footer'>
              <Link to={'/info'} style={{
                 textDecoration: 'none', 
                 color: props.color
                 }}>find out more about dicktionary.uk</Link>
    </div>
  )
}

OwnFooter.propTypes = {}

export default OwnFooter