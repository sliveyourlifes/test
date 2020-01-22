import { combineReducers } from 'redux';

import trendingReducer from './trending/reducer';
import searchReducer from './search/reducer';


const rootReducer = combineReducers({
  trendingPage: trendingReducer,
  searchPage: searchReducer
});

export default rootReducer;
