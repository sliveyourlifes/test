import { combineReducers } from 'redux';

import trendingReducer from './trending/reducer';

const rootReducer = combineReducers({
  trendingPage:trendingReducer,
});

export default rootReducer;
