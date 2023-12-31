import styled from 'styled-components';


export const StyledImageGallery = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;


  /*
   * Стили компонента ImageGallery
   */
  .ImageGallery {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  
 
`;