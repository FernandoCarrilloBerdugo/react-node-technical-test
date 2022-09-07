import { GET_COMMENTS } from "../actions/actionTypes";

const initialState = {
	comments: []
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {

		case GET_COMMENTS:
			return {
				...state,
				comments: payload
			}

		default:
			return state;
	}
}
