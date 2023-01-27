import React,{useState} from 'react'

import { useSelector  } from 'react-redux';
import { rooms } from '../../cache/umapRoom';
import "./search.css"
export const Search2 = (props) => {
        const roomses = useSelector(rooms)
        const [query2, setQuery2] = useState(''); // state to hold the search query2
        const [suggestions2, setSuggestions2] = useState([]); // state to hold the suggestions2
        const [originalSearchTerm2, setoriginalSearchTerm2] = useState(''); // state to hold the temporary query2 when hovering over a suggestion
        
        const search2 = event => {
            const listS2 =  document.querySelector('.suggestion-list2').classList
        const searchTerm2 = event.target.value;
        
        if (searchTerm2 === ""){
            listS2.add("hideList")
         
        }else{
            listS2.remove("hideList")
        }
      
          setQuery2(searchTerm2.toLowerCase());
          setoriginalSearchTerm2(searchTerm2.toLowerCase()); // update the search query2
          const suggestions2 = roomses[0].filter(word => word.roomName.toLowerCase().startsWith(query2) ||word.roomName.toLowerCase().includes(query2) ); // filter the words that match the query2
          
          setSuggestions2(suggestions2.slice(0, 10)); // update the suggestions2 state with the top 5 matching words
          
        
        };
      
        const selectSuggestion = suggestion => {
        const listS2 =  document.querySelector('.suggestion-list2').classList
          listS2.add("hideList")
          
          
          setQuery2(suggestion); // update the search query2 with the selected suggestion
          setSuggestions2([]); // clear the suggestions2
        };
      
        const handleHover = suggestion => {
            setQuery2(suggestion); // update the temporary query2 with the hovered suggestion
        };
      
        const handleHoverOut = () => {
            setQuery2(originalSearchTerm2); // clear the temporary query2
        };

        


        return (
      
              <div className="search-engine2">
                  <div  className="inputd " >
                  <input type="text"  
                    placeholder="search something"
                      
                    value={query2} onChange={search2}
                      
                      />
                      
                 
                  
                  </div>
      
                 
              <ul className='suggestion-list2 hideList'>
                {suggestions2.map(suggestion => (
                  <li
                  key={suggestion.roomID}
                  onClick={() => {
                    selectSuggestion(suggestion.roomName)
                    props.onDistination(`${suggestion.roomID}`)
                    }}
                  onMouseOver={() => handleHover(suggestion.roomName)}
                  onMouseOut={handleHoverOut}
                  >
                    {suggestion.roomName}
                   
                  </li>
                )
        )}
              </ul>
          
                  </div>
          
      
      
      
          
        )};
      
      
