import initialState from '../store/initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS_FEED':
      return {
        ...state,
        newsFeed: action.payload,
      };
    case 'SET_SEARCH_MESSAGE':
      return {
        ...state,
        searchMessage: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
