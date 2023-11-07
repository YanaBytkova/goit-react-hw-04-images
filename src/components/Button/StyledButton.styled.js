import styled from 'styled-components';

export const StyledButton = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  
  /*
  * Стили компонента Buton (Load more)
  */
  .Button {
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  
  .Button:hover,
  .Button:focus {
    background-color: #303f9f;
  }
`;