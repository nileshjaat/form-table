import { combineReducers } from 'redux';
import HomeReducer from './View/Home/reducer';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
