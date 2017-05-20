import { combineReducers } from 'redux';
import CamperListReducer from './reducer_camper_list';

const rootReducer = combineReducers({
  list: CamperListReducer
});

export default rootReducer;
