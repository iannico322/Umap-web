import {useState} from 'react'
import './loader.css'
import './load.css'

 export const Load = (props) => {
    const [load, setLoad] = useState("loader-screen show")
    
    setTimeout(() => {
      setLoad("loader-screen hide")
    },props.time);
   return (
    <div className={load}>
     <p>Loading</p>
     <div class="shapes"></div>

    
    </div>
   )
 }
