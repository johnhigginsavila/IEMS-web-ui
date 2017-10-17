import {
  ADD_ACTIVITY,
  ADD_ACTIVITY_ERROR,
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_ERROR,
  UPDATE_ACTIVITY,
  UPDATE_ACTIVITY_ERROR,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_ERROR
} from '../actions/types';

export default function (state = {}, action) {
  switch(action.type) {
    case ADD_ACTIVITY:
      return { ...state, message: action.payload, error: '' };
    case ADD_ACTIVITY_ERROR:
      return { ...state, error: action.payload, message: '' };
    case FETCH_ACTIVITIES:
      return { ...state, activities: action.payload, error: '' };
    case FETCH_ACTIVITIES_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_ACTIVITY:
      return { ...state, message: action.payload, error: '' };
    case UPDATE_ACTIVITY_ERROR:
      return { ...state, error: action.payload, message: '' };
    case DELETE_ACTIVITY:
      return { ...state, message: action.payload, error: '' };
    case DELETE_ACTIVITY_ERROR:
      return { ...state, error: action.payload, message: '' };
    default:
      return state;
  }
}
