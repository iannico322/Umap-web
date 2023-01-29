import React from 'react'
import './watermark.css'
import { Link } from "react-router-dom";
const WaterMark = () => {
  return (
    <div className='watermark-con'>
        <code>Develop by: <div> <span className='glitch' class="glitch" data-text="College Chettah"  onClick={() => {
                  document.querySelector(".devs").click();
                }}>COLLEGE CHEETAH </span><span className='gdsc'> | GDSC</span>  </div></code>
    <Link to="/devs" className="devs" target="_blank"></Link>
    </div>
  )
}

export default WaterMark