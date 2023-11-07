import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL, API_KEY } from './config';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { StyledApp } from './App.styled';

export const App = () => {

  const [images, setImages] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const [word, setWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [query, setQuery] = useState('');
  
  const onSubmit = (word) => {
    const searchWord = word;
    setWord(searchWord);
    setImages(null);
    setPage(1);
  }

  const fetchImages = async () => {
    try {
      
      setIsLoading(true);
      const { data } = await axios.get(`${API_URL}?q=${word}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      if (images == null) {
          setImages(data.hits);
          setTotalHits(data.totalHits);
      }
      
      if (page === Math.floor(totalHits / 12)) {
              alert(`...You viewed all images with ${word}! Please, enter new word!`);
            }
            
            if (images !== null) {
              const addImages = 
                data.hits;
                // console.log(this.state.images.length, addImages);
                setImages(images.concat(addImages));
                setTotalHits(data.totalHits);
              // this.setState(prevState => ({
              //   images: prevState.images.concat(addImages),
              //   totalHits: data.totalHits,
              //       }));}
            }
    } catch (error) {
      setError(error.message);
    } finally {
        setIsLoading(false)};
  }


  useEffect((prevState) => {
    if (prevState !== word ) {
        setImages(null);
      fetchImages();
    }
    if (page !== prevState || query !== prevState) {
      fetchImages();
    }
    
  }, [word, page, query]);
  // componentDidUpdate(_, prevState) {
  //   if (prevState.word !== this.state.word) {
  //     this.setState({
  //       images: null,
  //     });
  //     this.fetchImages();
  //   }
  //   if (this.state.page !== prevState.page || this.state.query!== prevState.query) {
  //     this.fetchImages();
  //   }
  // };

  const openModal = imageUrl => {
      setIsOpenModal(true);
      setModalData(imageUrl);
  };

  const closeModal = () => {
    
      setIsOpenModal(false);
      setModalData(null);
   
  };
  const loadMoreHandler = () => {
      setPage(page + 1);
  }

  
  return (
    <StyledApp
    >
      <Searchbar onSubmit={onSubmit}/>
      {isLoading && <Loader />}
      {images !== null && <ImageGallery images={images} openModal={openModal} />}
      {((totalHits > 12) && (page !== Math.floor(totalHits / 12))) && <Button loadMoreHandler={loadMoreHandler} />}
      {isOpenModal && (
          <Modal
            closeModal={closeModal}
            modalData={modalData}
          />
        )}
    </StyledApp>
  )
};

 
