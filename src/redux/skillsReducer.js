import { SET_SKILLS } from "./actionTypes";
import {
	skillsPreset,
} from "../components/texts.js";

const initialState = {
    skills: [...skillsPreset]
}
export const skillsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SKILLS:
			return {
				...state,
				skills: [...state.skills, action.payload]
			};
		default:
			return state;
	}
};