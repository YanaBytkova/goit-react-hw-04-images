import React from 'react';
import { StyledButton } from './StyledButton.styled';


const  Button = ({loadMoreHandler}) => {
  
    return (
       <StyledButton> 
            <button type="submit" className="Button" onClick={loadMoreHandler}>Load More</button>
        </StyledButton>
    );
  
}
export default Button;