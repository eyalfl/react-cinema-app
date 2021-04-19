import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../spinner/Spinner';
import { getMovies } from '../../../redux/actions/Movies';
import MainContent from './MainContent';

const MainContentContainer = ({ getMovies, movieList, movieType }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies(movieType.type, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieType]);

  return (
    <div>
      { movieList ? <MainContent /> : <Spinner /> }
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  movieType: state.movies.movieType
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (type, page) => dispatch(getMovies(type, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContentContainer);
