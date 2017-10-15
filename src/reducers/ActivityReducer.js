import { ADD_ACTIVITY, ADD_ACTIVITY_ERROR, FETCH_ACTIVITIES, FETCH_ACTIVITIES_ERROR } from '../actions/types';

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
    default:
      return state;
  }
}
