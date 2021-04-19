import Types from '../types';

const initialState = {
  list: null,
  isLoading: false,
  page: 1,
  totalPage: 0,
  error: null,
  movieType: { type: 'now_playing', name: 'Now Playing' }
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.MOVIE_START:
      return {
        ...state,
        list: null,
        isLoading: true,
        error: null
      };
    case Types.MOVIE_LIST:
      return {
        ...state,
        list: action.payload.results,
        totalPage: action.payload.total_pages,
        page: action.payload.page,
        isLoading: false,
        error: null
      };
    case Types.LOAD_MORE_RESULTS:
      return {
        ...state,
        list: [...state.list, ...action.payload.results],
        page: action.payload.page,
        isLoading: false
      };
    case Types.MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload
      };
    case Types.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
