import React,{useState} from 'react'
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import MenuIcon from "../../media/image/menu.svg"
import MenuOpenIcon from "../../media/image/menu-open.svg"
import './navbar2.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    logout,
  users,
} from '../../cache/userCredentials';

export const Navbar2 = (props) => {
    const credentials = useSelector(users);
    const dispatch = useDispatch();
    
    const [clickMenu, setClickMenu] = useState(true)
    const [Menu, setMenu] = useState(MenuIcon)

  
  return (
    
    <div className='nav2'>
      
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
       
        <div className='menu'>
            <img src={Menu} className="menu-btn" alt='Menu-icon' onClick={()=>{
                var link = document.querySelector('.links')
               
                
               if(clickMenu){
                link.classList.remove('hide-link')
                setMenu(MenuOpenIcon)
           
                
                setClickMenu(false)
               }else{
                link.classList.add('hide-link')

                setMenu(MenuIcon)
           
                setClickMenu(true)
               }
               
                

            }}/>
       
            <ul className='links hide-link'>
                <li className={props.profile} onClick={()=>{
                    document.querySelector(".profile").click()
                }} >Profile</li>
                <li className={props.goingTo} onClick={()=>{
                    document.querySelector(".main").click()
                }} >Going To</li>
                <li onClick={()=>{
                    dispatch(logout())
                    document.querySelector(".out").click()
                }}>Log Out</li>
               <div className='link-hide'>
               <Link to="/profile" className="profile"></Link>
                <Link to="/main" className="main"></Link>
                <Link to="/login" className="out"></Link>
               </div>
                
                
            </ul>
        </div>
        
        
     
        

        
    </div>
  )
}
