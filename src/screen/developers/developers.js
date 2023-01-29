import React from 'react'
import { Navbar3 } from '../../components/navbar/navbar3'
import './dev.css'
import Joy from './../../media/joy.png'
import Ian from './../../media/ian.png'
import Kyle from './../../media/kyle.png'
import Aubrey from './../../media/aubrey.png'
import Shek from './../../media/shek.png'
import GDSC from './../../media/gdsc.png'
import { useState } from 'react'
const Developers = () => {
    const [imagess ,setImages] = useState([Joy,Ian,Kyle,Aubrey,Shek,GDSC])
  return (
    <div className='dev-con'>
       
        <Navbar3 />
        
        <div className='dev-box'>
                <div className='title-head'>
                  <h1> COLLEGE CHEETAH</h1>
                    <span className='team' style={{marginLeft:30,fontWeight:300,marginTop:40,fontSize:30,color:"white",letterSpacing:24}}>TEAM</span>
                    
                </div>
                
                <div className='imagesss'>
                  
                        {imagess.map(e=>(
                        <img className='dev-card' src={e} alt="" />
                    ))}
            
                </div>
                 
            
        </div>
    </div>
  )
}

export default Developers