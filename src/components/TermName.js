import React from 'react'
import PropTypes from 'prop-types'

function TermName(props) {
    var RandomNumber = Math.floor(Math.random() * (110)) + 20;
    var value= parseInt(RandomNumber) + parseInt(props.size);   
    var degree =  RandomNumber = Math.floor(Math.random() * (45)) - 15;
    var left =  RandomNumber = Math.floor(Math.random() * (90)) - 10;
    var top =  RandomNumber = Math.floor(Math.random() * (40)) - 30;
    degree = degree + 'deg'

  return (
   <button className='special_button'
      onClick={props.onClick}
      style={{
        backgroundColor: 'transparent',
        color: '#fdea25',
        height: props.height + props.size,
        width: props.width + props.children.length + props.size,
        borderRadius: props.radius,
        paddingLeft: left,
        top: top,
        fontSize: value,
        border: 'transparent',
        transform: 'rotate('+ degree+')',
       
        

      }}
    >
    {props.children}
    
    </button>
  )
}

TermName.propTypes = {}

export default TermName
