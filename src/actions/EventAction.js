import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3090'
});

export function getPosts () {
  return dispatch => {
    instance({
      method: 'GET',
      url: 'posts'
    })
    .then(posts => {
      console.log(posts);
      dispatch({
        type: GET_POSTS,
        payload: posts
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}
