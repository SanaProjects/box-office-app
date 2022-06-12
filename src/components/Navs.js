import React from 'react';
import {Link} from 'react-router-dom';

const LINKS =[
    {to:'/', text: 'Home'},
    {to:'/about', text: 'About'},
]



const Navs = () => {
  return (
    <div>
      <ul>
  
        {
          LINKS.map(item => <li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
        }

        {/* <li>
          
        </li> */}
          
      </ul>
    </div>
  )
}

export default Navs
