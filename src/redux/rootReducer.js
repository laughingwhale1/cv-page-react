import { combineReducers  } from "@reduxjs/toolkit";
import { offsetReducer,  } from "./offsetReducers";
import { sideBarReducer } from './sideBarReducer'
import { skillsReducer } from "./skillsReducer";
import {educationReducer} from './educationReducer'

export const rootReducer = combineReducers({
    offsetReducer,
    sideBarReducer,
    skillsReducer,
    educationReducer,
})