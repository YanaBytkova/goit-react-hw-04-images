import React from 'react';
import { StyledImageGalleryItem } from './StyledImageGalleryItem.styled';


export const ImageGalleryItem = ({images, openModal}) => {

    return (
      images.map(image => (
                <StyledImageGalleryItem key={image.id}>
                  <li key={image.id} className="ImageGalleryItem" onClick={() => openModal(image.largeImageURL)}>
                    <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image"/>
                  </li>
                </StyledImageGalleryItem>
    )));
}

// export default ImageGalleryItem;
