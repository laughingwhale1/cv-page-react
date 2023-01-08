import { educationReducer, } from "./educationReducer";
import { sideBarReducer } from "./sideBarReducer";
import { skillsReducer } from "./skillsReducer";
import { offsetReducer } from "./offsetReducers";
import {
    SET_CONTACTS_OFFSETTOP,
    SET_EDUCATION_DATA,
    SET_ABOUT_OFFSETTOP,
    SET_EDUCATION_OFFSETTOP,
    SET_SKILLS_OFFSETTOP,
    SET_EXPERIENCE_OFFSETTOP,
    SET_FEEDBACK_OFFSETTOP,
    SET_PORTFOLIO_OFFSETTOP,
    SET_SIDEBAR_COLLAPSED,
    SET_SKILLS
} from "./actionTypes";
import {
    skillsPreset,
} from "../components/texts.js";

test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_PORTFOLIO_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})
test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_FEEDBACK_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})
test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_EXPERIENCE_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})
test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_SKILLS_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})
test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_EDUCATION_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})
test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_CONTACTS_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})

test('offset reducer default case', () => {
    expect(offsetReducer({ value: [] }, { type: SET_SIDEBAR_COLLAPSED, offset: 1000 })).toStrictEqual({ value: [] })
})

test('offset reducer', () => {
    expect(offsetReducer({ value: [] }, { type: SET_ABOUT_OFFSETTOP, offset: 1000 })).toStrictEqual({ value: [1000] })
})

test('skills reducer', () => {
    expect(skillsReducer({skills: [...skillsPreset]}, { type: SET_SKILLS, payload: { skillName: 'TypeScript', poficiency: 90 } })).toStrictEqual({
        skills: [{
            skillName: 'HTML5',
            proficiency: 90
        },
        {
            skillName: 'CSS3',
            proficiency: 85
        },
        {
            skillName: 'JavaScript',
            proficiency: 75
        },
        { 
            skillName: 'TypeScript', 
            poficiency: 90 
        }]
    })
})
test('skills reducer default case', () => {
    expect(skillsReducer({ skills: skillsPreset }, { type: SET_SIDEBAR_COLLAPSED, payload: true })).toStrictEqual({ skills: skillsPreset })
})

test('sidebar reducer', () => {
    expect(sideBarReducer({ status: false }, { type: SET_SIDEBAR_COLLAPSED, status: true })).toStrictEqual({ status: true })
})
test('sidebar reducer default case', () => {
    expect(sideBarReducer({ status: false }, { type: SET_CONTACTS_OFFSETTOP, status: true })).toStrictEqual({ status: false })
})

test('education reducer', () => {
    expect(educationReducer({ data: null }, { type: SET_EDUCATION_DATA, payload: true })).toStrictEqual({ data: true })
})
test('education reducer default case', () => {
    expect(educationReducer({ data: null }, { type: SET_CONTACTS_OFFSETTOP, payload: true })).toStrictEqual({ data: null })
})