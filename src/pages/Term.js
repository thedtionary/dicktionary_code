import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useParams, useHistory } from "react-router-dom";
import Helmet from 'react-helmet';
import image from '../images/posters.png';
import image2 from '../images/cursor-61.png';
import {Link} from "react-router-dom";
import OwnFooter from '../components/OwnFooter';

export default function Term() {
  let {slug}  = useParams();

  const [termList,setTermList] = useState([]);

  let history = useHistory();
useEffect(() => {
  return history.listen((location) => { 
     console.log(`You changed the page to: ${location.pathname}`) 
  }) 
},[history])  

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
      <Link className="back_image"
to="/" > 
←
        </Link>

<div className='posts'>
{termList.map(function(d, idx){
         return (<div className='one_post'>
           <h1 className='date'>{d.date}</h1>
         <h2 >{d.term}</h2>
         </div>
         )
       })}

</div>


<Link className="link_image"
to="/form" > 
          <img className="link_image"
            src={image}
            alt="example"
            width="539" height="441"
          />
        </Link>
        <OwnFooter color="#ff48b0"/>
    </div>
  )
}
