import React from 'react';
import Rating from '../rating/Rating';
import './Grid.scss';

const Grid = ({ images }) => {
  return (
    <div className='grid-container'>
      {
        images.map((image, index) => (
          <div key={index}>
            <div className='grid-cell'
              style={{ backgroundImage: `url(${image.url})` }}>
              <div className='grid-read-more'>
                <button className='grid-cell-button'>
                  Read More
                </button>
              </div>
              <div className='grid-detail'>
                <span className='grid-detail-title'>Mission Impossible sdfgsdf  dfgdf dfgdfg dfgdfg dfgdfg dfgdfsg dsgsdf</span>
                <Rating rating={image.rating} totalStar={5}/>
              </div>
            </div>
          </div>

        ))
      }

    </div>
  );
};

export default Grid;
