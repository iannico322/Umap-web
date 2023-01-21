import React,{useEffect, useState} from 'react'
import Magnifying from './../../media/image/Magnifier.png'
import Ex from "../../media/image/x-icon.svg"
import {rooms} from "./rooms"
import axios from 'axios'
import "./search.css"
import { useSelector } from 'react-redux';
import {
  users,
} from './../../cache/userCredentials';


const displayTime = () => {

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const amPm = hours >= 12 ? 'pm' : 'am';
  let hoursMod = hours % 12;
  if (hoursMod === 0) {
    hoursMod = 12;
  }
  const minutesMod = minutes < 10 ? `0${minutes}` : minutes;
  const timeString = `${hoursMod}:${minutesMod}${amPm}`;
  console.log(timeString)
  return timeString
}


 
const SearchLog = (text,userid)=>{
  
  
    const url = 'http://localhost/umap-server/searchlog.php';
    let fData = new FormData();
    fData.append('searchtext', text);
    fData.append('timestamp',displayTime());
    fData.append('userid', userid );
    axios.post(url, fData ).catch(error=> alert(error));

    
}


export const Search = (props) => {
        let x = true;
        const credentials = useSelector(users);
        const [query, setQuery] = useState(''); // state to hold the search query
        const [suggestions, setSuggestions] = useState([]); // state to hold the suggestions
        const [originalSearchTerm, setoriginalSearchTerm] = useState(''); // state to hold the temporary query when hovering over a suggestion
        const [icon,seticon ] = useState(Magnifying);
        const search = event => {
            const listS =  document.querySelector('.suggestion-list').classList
        const searchTerm = event.target.value;
        
        if (searchTerm === ""){
            listS.add("hideList")
            props.onBuilding("")
        }else{
            listS.remove("hideList")
        }
        props.onBuilding(searchTerm)
          setQuery(searchTerm.toLowerCase());
          setoriginalSearchTerm(searchTerm.toLowerCase()); // update the search query
          const suggestions = rooms.filter(word => word.roomName.toLowerCase().startsWith(query) ||word.roomName.toLowerCase().includes(query) ); // filter the words that match the query
          setSuggestions(suggestions.slice(0,10)); // update the suggestions state with the top 5 matching words
        };
      
        const selectSuggestion = suggestion => {
        const listS =  document.querySelector('.suggestion-list').classList
          listS.add("hideList")
          setQuery(suggestion); // update the search query with the selected suggestion
          setSuggestions([]); // clear the suggestions
        };
      
        const handleHover = suggestion => {
            setQuery(suggestion); // update the temporary query with the hovered suggestion
        };
      
        const handleHoverOut = () => {
                  props.onBuilding("")
                    props.onRoom("")
                    props.onFloor("")
                    props.onBlock("")
            setQuery(originalSearchTerm); // clear the temporary query
        };

        


        return (
      
              <div className="search-engine">
                  <div  className="inputd small" >
                  <input type="text"  
                    placeholder="search something"
                    value={query} onChange={search}/>
                      
                  <img src={icon}  alt="" onClick={()=>{
                     const sh =  document.querySelector('.inputd').classList
                      if(icon === Ex){
                        setQuery("")
                        seticon(Magnifying)
                        props.onBuilding("")
                        props.onRoom("")
                        props.onFloor("")
                        props.onBlock("")
                        x = false
                      }else{
                        
                        if(x){
                          sh.remove('small')
                          x = false;
                        }else{
                          sh.add('small')
                          x = true;
                        }
                      }
                      
                  }} />
      
                  
                  </div>
      
                 
              <ul className='suggestion-list hideList'>
                {suggestions.map(suggestion => (
                  <li
                  key={suggestion.roomID}
                  onClick={() => {selectSuggestion(suggestion.roomName)
                    seticon(Ex)
                    props.onBuilding(suggestion.buildingNumber)
                    props.onRoom(suggestion.roomName)
                    props.onFloor(`F ${suggestion.floorNumber}`)
                    props.onBlock(`B ${suggestion.blockNumber}`)
                    props.onLoc("")
                    SearchLog(suggestion.roomName,props.userID)

                    }}
                  onMouseOver={() => {handleHover(suggestion.roomName)
                  
                    props.onBuilding(suggestion.buildingNumber)
                    props.onRoom(suggestion.roomName)
                    props.onFloor(`F ${suggestion.floorNumber}`)
                    props.onBlock(`B ${suggestion.blockNumber}`)
                    props.onLoc("")
                  
                  }
                  
                  
                  }
                  onMouseOut={handleHoverOut}
                  >
                    {suggestion.roomName}
                   
                  </li>
                )
        )}
              </ul>
          
                  </div>
          
      
      
      
          
        )};
      

   
      
