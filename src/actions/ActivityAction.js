import axios from 'axios';
import { ROOT_URL } from '../api.config';
import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_ERROR,
  ADD_ACTIVITY,
  ADD_ACTIVITY_ERROR 
} from './types';

const authorization = localStorage.getItem('token');

export function getAllActivities () {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/activity/all`, {
      headers: { authorization }
    })
    .then(result => {
      dispatch({type: FETCH_ACTIVITIES, payload: result.data});
      console.log(result);
    })
    .catch(error => {
      dispatch({type: FETCH_ACTIVITIES_ERROR, payload: 'There was a problem in fetching all activities'});
      console.log(error);
    })
  }
}

export function addActivity (activity) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/activity/create`,activity, {
      headers: { authorization }
    })
    .then(result => {
      dispatch({type: ADD_ACTIVITY, payload: 'The activity was successfully added.'})
      console.log(result);
    })
    .catch(error => {
      dispatch({type: ADD_ACTIVITY_ERROR, payload: 'There was an error in adding the activiy, try again later.'})
      console.log(error);
    })
  }
}
