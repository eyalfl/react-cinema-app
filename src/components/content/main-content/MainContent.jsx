import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import { loadMoreMovies } from '../../../redux/actions/Movies';
import { IMAGE_URL } from '../../../services/movies.service';
import './MainContent.scss';
import Spinner from '../../spinner/Spinner';

const MainContent = ({ loadMoreMovies, movieList, totalPages, movieType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [randomImageList, setRandomImageList] = useState(null);
  const randomMovies = () => {
    let randomMoviesList = [];
    if (movieList.length > 4) {
      const fromIndex = Math.floor(Math.random() * (movieList.length - 4));
      randomMoviesList = movieList.slice(fromIndex, fromIndex + 4);
    } else {
      randomMoviesList = movieList;
    }
    const randomImageListMap = randomMoviesList.map((movie, index) => {
      return (
        {
          id: index,
          url: `${IMAGE_URL}${movie.backdrop_path}`
        }
      );
    });
    setRandomImageList(randomImageListMap);
  };

  useEffect(() => {
    if (movieList && movieList.length > 0) {
      randomMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList]);

  const paginate = (type) => {
    if ((type === 'prev') && (currentPage > 1)) {
      loadMoreMovies('now_playing', currentPage - 1);
      setCurrentPage((prev) => prev - 1);
    } else if ((type === 'next') && (currentPage < totalPages)) {
      loadMoreMovies('now_playing', currentPage + 1);
      setCurrentPage((prev) => prev + 1);
    }
  };
  // const totalPages = 10;
  console.log('-------------------');
  console.log(randomImageList);

  return (
    <div>
      { randomImageList
        ? <div className='main-content-container'>
          <SlideShow images={randomImageList} auto={false} showArrows={true} />
          <div className='grid-movie-title'>
            <div className='movie-type'>{movieType.name}</div>
            <div className='paginate'>
              <Paginate currentPage={currentPage} totalPages={totalPages} handlePaginate={paginate} />
            </div>
          </div>
          <Grid />
        </div>
        : <Spinner />}
    </div>
  );
};

MainContent.propTypes = {
  loadMoreMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  totalPages: state.movies.totalPage,
  movieType: state.movies.movieType
});

const mapDispatchToProps = (dispatch) => ({
  loadMoreMovies: (type, page) => dispatch(loadMoreMovies(type, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
