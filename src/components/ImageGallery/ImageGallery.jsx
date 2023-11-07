import React from 'react';
import { StyledImageGallery } from './StyledImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({images, openModal}) => {
  
    return (
      <StyledImageGallery>
        <ul className="ImageGallery">
            <ImageGalleryItem images={images} openModal={openModal}/>
        </ul>
     </StyledImageGallery>
    );
  
}
// export default ImageGallery;