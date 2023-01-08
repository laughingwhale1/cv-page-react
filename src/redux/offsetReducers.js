import {
	SET_ABOUT_OFFSETTOP,
	SET_EDUCATION_OFFSETTOP,
	SET_SKILLS_OFFSETTOP,
	SET_EXPERIENCE_OFFSETTOP,
	SET_CONTACTS_OFFSETTOP,
	SET_FEEDBACK_OFFSETTOP,
	SET_PORTFOLIO_OFFSETTOP,
} from "./actionTypes";
const initialState = {
	value: [],
};
export const offsetReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ABOUT_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_EDUCATION_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_SKILLS_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_EXPERIENCE_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_CONTACTS_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_PORTFOLIO_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		case SET_FEEDBACK_OFFSETTOP:
			return {
				...state,
				value: [...state.value, action.offset],
			};
		default:
			return state;
	}
};
// state.value.concat(action.offset)
