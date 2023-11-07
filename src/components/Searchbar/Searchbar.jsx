import React, { useState } from 'react';
import { StyledSearchbar } from './StyledSearchbar.styled';

export const Searchbar = ({onSubmit}) => {

    const [word, setWord] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        onSubmit(word);
        form.reset();
      };
    const handleInputChange = event => {
      
        const value = event.target.value;
        setWord(value);
       
      };
  
    return (
      <StyledSearchbar>
         <header className="searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>&#128270;
        </button>
    
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
    </StyledSearchbar>
  );
}
// export default Searchbar;
