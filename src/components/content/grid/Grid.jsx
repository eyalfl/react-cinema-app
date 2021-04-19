import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import { IMAGE_URL } from '../../../services/movies.service';
import './Grid.scss';

const Grid = ({ list }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(list);
  }, [list]);

  return (
    <div className='grid-container'>
      {
        movieData.map((data, index) => (
          <div key={uuidv4()}>
            <div className='grid-cell'
              style={{ backgroundImage: `url(${IMAGE_URL}${data.poster_path})` }}>
              <div className='grid-read-more'>
                <button className='grid-cell-button'>
                  Read More
                </button>
              </div>
              <div className='grid-detail'>
                <span className='grid-detail-title'>{data.title}</span>
                <Rating rating={data.vote_average} totalStar={10} />
              </div>
            </div>
          </div>

        ))
      }

    </div>
  );
};

Grid.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps)(Grid);
