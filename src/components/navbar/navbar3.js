import React from 'react'
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import {
    logout
} from '../../cache/userCredentials';
import './navbar2.css';
export const Navbar3 = (props) => {
    const dispatch = useDispatch();

  
  return (
    
    <div className='nav2'>
      
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
       
        <div className='menu'>
         
            <ul className='links '>
        
                <li className='button-24' onClick={()=>{
                     dispatch(logout())
                    document.querySelector(".out").click()
                }}>Exit</li>
               <div className='link-hide'>
               <Link to="/umap" className="out"></Link>
               </div>
            </ul>
        </div>
        
        
     
        

        
    </div>
  )
}
