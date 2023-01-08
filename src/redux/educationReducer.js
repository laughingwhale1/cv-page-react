import { SET_EDUCATION_DATA } from "./actionTypes";

const initialState = {
    data: null
}
export const educationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EDUCATION_DATA:
			return {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
};