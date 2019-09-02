import axios from 'axios';

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPostAPI = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export const getPost = (postId) => (dispatch) => {
    dispatch( {type : GET_POST_PENDING} ); // Set the state as pending

    return getPostAPI(postId).then((res) => { // If axios (getPostAPI func) is success
        dispatch( {type : GET_POST_SUCCESS, payload : res} );
    }).catch((err) => { // If axios (getPostAPI func) is fail
        dispatch( {type : GET_POST_FAILURE} );
    })
};

/*
https://jsonplaceholder.typicode.com/posts/1
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/

const initialState = {
    pending : false, // Represent pending statement
    error : false, // Represent error statement
    data : { // Store JSON API data
        title : '',
        body : ''
    }
};

export default function post(state = initialState, action){
    switch(action.type){
        case GET_POST_PENDING:
            return { ...state, pending : true, error : false }
        case GET_POST_SUCCESS:
            return { ...state, pending : false, error : false, data : { title : action.payload.data.title, body : action.payload.data.body } }
        case GET_POST_FAILURE:
            return { ...state, pending : false, error : true }
        default:
            return state
    }
};