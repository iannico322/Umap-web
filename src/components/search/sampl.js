import React, { useState, useRef } from 'react';
import words from './words.json'; // JSON file with the list of words

function SearchEngine() {
  const [query, setQuery] = useState(''); // state to hold the search query
  const [suggestions, setSuggestions] = useState([]); // state to hold the suggestions
  const [tempQuery, setTempQuery] = useState(''); // state to hold the temporary query when hovering over a suggestion
  const inputRef = useRef(null); // reference to the input field

  const search = () => {
    setQuery(inputRef.current.value); // update the search query with the value of the input field
    const suggestions = words.filter(word => word.includes(query)); // filter the words that match the query
    setSuggestions(suggestions.slice(0, 5)); // update the suggestions state with the top 5 matching words
  };

  const selectSuggestion = suggestion => {
    setQuery(suggestion); // update the search query with the selected suggestion
    setSuggestions([]); // clear the suggestions
  };

  const handleHover = suggestion => {
    setTempQuery(suggestion); // update the temporary query with the hovered suggestion
  };

  const handleHoverOut = () => {
    setTempQuery(''); // clear the temporary query
  };

  return (
    <div>
      <input ref={inputRef} defaultValue={query} onKeyDown={e => e.key === 'Enter' && search()} />
      {suggestions.map(suggestion => (
        <div
          key={suggestion}
          onClick={() => selectSuggestion(suggestion)}
          onMouseOver={() => handleHover(suggestion)}
          onMouseOut={handleHoverOut}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
}

export default SearchEngine;
