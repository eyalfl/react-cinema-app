import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Details.scss';
import Rating from '../rating/Rating';
// import { pathURL } from '../../../redux/actions/routes';
import { IMAGE_URL } from '../../../services/movies.service';
import Spinner from '../../spinner/Spinner';

const Details = (props) => {
  const { movie } = props;
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setDetails(movie[0]);
    // eslint-disable-next-line
  }, [id, movie]);

  return (
    <>
      {loading
        ? (
          <Spinner />
        ) : (
          details && (
            <div className="movie-container">
              <div className="movie-bg" style={{ backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})` }}></div>
              <div className="movie-overlay"></div>
              <div className="movie-details">
                <div className="movie-image">
                  <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
                </div>
                <div className="movie-body">
                  <div className="movie-overview">
                    <div className="title">
                      {details.title} <span>{details.release_date}</span>
                    </div>
                    <div className="movie-genres">
                      <ul className="genres">
                        {details.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rating">
                      <Rating className="rating-stars" rating={details.vote_average} totalStars={10} />
                    &nbsp;
                    <span>{details.vote_average}</span> <p>({details.vote_count}) reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};

Details.propTypes = {
  movie: PropTypes.array,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps)(Details);
