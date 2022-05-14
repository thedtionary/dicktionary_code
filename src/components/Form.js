import React from 'react'

import { useState, useEffect, componentDidMount } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import cursor from '../images/cursor-61.png';
import moment from 'moment';

export default function Form() {
    
    const [inputs, setInputs] = useState([]);
    const [data, setData] = useState(new Date());
    

   
    
    let history = useHistory();
    function handleClick() {
        history.push("/thankyou");
        window.location.reload()
      }

     

      useEffect(() => {
        var NewDate= moment(new Date, 'DD-MM-YYYY').format();
        NewDate=NewDate.split('T')[0];
       var timer  = setInterval(()=>setData(NewDate), 10)
       return function cleanup() {
           clearInterval(timer)
       }
      },[])  


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
const names = 'date';
        setInputs(values => ({...values, [names]: data}));

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(inputs)
        axios.post('https://the-dicktionary.herokuapp.com/api/term', inputs).then(function (response) {
            console.log(response.data);
           handleClick();
        });

    }


        return (
            <div>
                <div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='some_padding1'>
                        <label ><b>What terms were you described with?</b></label><br/>
                        <input type="text" name="name" id="name" className="form_input"
                            placeholder="e.g. bitch" onChange={handleChange}/>

                        </div>
                        <div>
                        <label><b>Briefly describe the situation in which it happened</b></label><br />
                        <textarea type="text" name="story" id="story" rows="8" cols="50"
                            className="form_input" onChange={handleChange}>
                        </textarea>
                        </div>
                        <input className='button_submit' type="image" src={cursor} alt="Submit" width="48" height="48" /><br />

                    </form>

                </div>
                <p><span id='display'></span></p>
            </div>
        )
    }
