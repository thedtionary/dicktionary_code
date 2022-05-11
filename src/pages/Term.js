import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useParams } from "react-router-dom";
import Helmet from 'react-helmet';
import image from '../images/posters.png';
import {Link} from "react-router-dom";

export default function Term() {
  let {slug}  = useParams();

  const [termList,setTermList] = useState([]);


useEffect(()=>{
Axios.get('https://the-dicktionary.herokuapp.com/api/termsname',{
  headers: {
    'name': slug
  }}).then((data)=>{
  console.log(data)
  setTermList(data.data)
}).catch(err => console.log(err))
},[])

  return (
    <div > 
     <Helmet bodyAttributes={{style: 'background-color : #fdea25'}}/>
      <h1 className='text_header_pink'>{slug}</h1>

{termList.map(function(d, idx){
         return (<li key={idx}>{d.story}</li>)
       })}




<Link className="link_image"
to="/form">
          <img className="link_image"
            src={image}
            alt="example"
            width="439" height="341"
          />
        </Link>
    </div>
  )
}
