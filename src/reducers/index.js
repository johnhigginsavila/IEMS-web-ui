import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';

const rootReducer = combineReducers({
  form,
  auth: AuthReducer,
  activity: ActivityReducer
});

export default rootReducer;
