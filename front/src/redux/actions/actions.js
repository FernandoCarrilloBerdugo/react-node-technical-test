import { GET_COMMENTS } from "./actionTypes";
import axios from "axios";
const api = process.env.REACT_APP_API;

export function getComments() {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${api}/comment`);
			if(Array.isArray(data)){
				dispatch({ type: GET_COMMENTS, payload: data });
			} else {
				dispatch({ type: GET_COMMENTS, payload: [] });
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export function postComment(comment) {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`${api}/comment`, comment);
			if (typeof data === "object") return "success";
			return;
		} catch (error) {
			console.log(error);
		}
	};
}

export function putComment(id, comment) {
	return async (dispatch) => {
		try {
			// eslint-disable-next-line
			const { data } = await axios.put(`${api}/comment/${id}`, comment); 
			return;
		} catch (error) {
			console.log(error);
		}
	};
}

export function deleteComment(id) {
	return async (dispatch) => {
		try {
			// eslint-disable-next-line
			const { data } = await axios.delete(`${api}/comment/${id}`);
		} catch (error) {
			console.log(error)
		}
	};
}
