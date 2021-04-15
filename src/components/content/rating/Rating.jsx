// import React, { useRef, useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Rating.scss';

const Rating = ({ rating, totalStar }) => {

  const Star = () => {
    const starArray = [...Array(5)].map((value, index) => {
      return <i key={index} className='fa fa-star' aria-hidden='true'></i>;
    });
    return starArray;
  };

  const frontStarPercent = `${Math.floor((rating / totalStar) * 100)}%`;
  const frontStarPercentObj = {};
  frontStarPercentObj.width = frontStarPercent;

  return (
    <div className='rating-container'>
      <div className='grid-detail-rating'>
        <div className='star-rating'>
          <div className='back-stars'>
            <Star />

            <div className='front-stars' style={frontStarPercentObj}>
              <Star />
            </div>
          </div>
        </div>
            &nbsp; &nbsp;
        <div className='grid-vote-average'>{rating}</div>
      </div>

    </div>
  );
};
Rating.propTypes ={
  rating: PropTypes.number.isRequired,
  totalStar: PropTypes.number.isRequired
}

export default Rating;
