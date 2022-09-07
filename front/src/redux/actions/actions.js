import { GET_COMMENTS } from "./actionTypes";
import axios from "axios";
const api = process.env.REACT_APP_API

export function getComments() {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${api}/comment`);
			dispatch({ type: GET_COMMENTS, payload: data });
		} catch (error) {
			console.log(error);
		}
	};
}

export function postComment(comment) {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`${api}/comment`, comment);
      if(typeof data === 'object') return 'success'
		} catch (error) {
			console.log(error);
		}
	};
}
