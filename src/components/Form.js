import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cursor from '../images/cursor-61.png';

export default function Form() {
    
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://the-dicktionary.herokuapp.com/api/term', inputs).then(function (response) {
            console.log(response.data);
            
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
