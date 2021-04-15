import React, { useState } from 'react';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const images = [
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 4.5
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 3
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 4.5
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 3.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 2.5
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 4.5
    }
  ];

  const paginate = (type) => {
    if ((type === 'prev') && (currentPage > 1)) {
      setCurrentPage((prev) => prev - 1);
    } else if ((type === 'next') && (currentPage < totalPages)) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const totalPages = 10;

  return (
    <div className='main-content-container'>
      <SlideShow images={images} auto={false} showArrows={true} />
      <div className='grid-movie-title'>
        <div className='movie-type'>Now Playing</div>
        <div className='paginate'>
          <Paginate currentPage={currentPage} totalPages={totalPages} handlePaginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
