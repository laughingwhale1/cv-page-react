import { SET_SIDEBAR_COLLAPSED } from "./actionTypes";
const initialState = {
	status: false,
};
export const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SIDEBAR_COLLAPSED:
			return {
				...state,
				status: action.status,
			};
		default:
			return state;
	}
};
