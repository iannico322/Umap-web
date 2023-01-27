import React from 'react'
import './card.css'
import EventImage from './../../media/image/sched-pic.png'
import LocIcon from './../../media/image/point.png'
export const Card2 = (props) => {
  return (
    <div className='card-container'    onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
        
        <div className="card-box"  >
            <img src={EventImage} alt="" />
            <div className="card-text">
                <div className="event-title">
                       {props.title}
                </div>
                <div className="event-time">
                {props.time}<br/>
                <b>{props.date} </b>
                </div>
            </div>

            <div className={`building-loc ${props.active} ` }
            onClick={props.onClick}
            >
                <img src={LocIcon} alt="" />
                <h2>{props.building}</h2>
            </div>
        </div>
        
    </div>
  )
}
