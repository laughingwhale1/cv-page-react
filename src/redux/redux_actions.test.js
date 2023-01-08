import { setAbout, SET_ABOUT_OFFSETTOP, setEducation, SET_EDUCATION_OFFSETTOP, setExperience, SET_EXPERIENCE_OFFSETTOP, setSkills, SET_SKILLS_OFFSETTOP, setPortfolio, SET_PORTFOLIO_OFFSETTOP, setContacts, SET_CONTACTS_OFFSETTOP, setFeedback, SET_FEEDBACK_OFFSETTOP, setSidebarCollapsed, SET_SIDEBAR_COLLAPSED, setSkillsBar, SET_SKILLS, setEducationData, SET_EDUCATION_DATA, } from './actionTypes';

test('setAbout action returns object', () => {
    expect(setAbout(1000)).toStrictEqual({ type: SET_ABOUT_OFFSETTOP, offset: 1000 })
})
test('setEducation action returns object', () => {
    expect(setEducation(1000)).toStrictEqual({ type: SET_EDUCATION_OFFSETTOP, offset: 1000 })
})
test('setExperience action returns object', () => {
    expect(setExperience(1000)).toStrictEqual({ type: SET_EXPERIENCE_OFFSETTOP, offset: 1000 })
})
test('setSkills action returns object', () => {
    expect(setSkills(1000)).toStrictEqual({ type: SET_SKILLS_OFFSETTOP, offset: 1000 })
})
test('setPortfolio action returns object', () => {
    expect(setPortfolio(1000)).toStrictEqual({ type: SET_PORTFOLIO_OFFSETTOP, offset: 1000 })
})
test('setContacts action returns object', () => {
    expect(setContacts(1000)).toStrictEqual({ type: SET_CONTACTS_OFFSETTOP, offset: 1000 })
})
test('setFeedback action returns object', () => {
    expect(setFeedback(1000)).toStrictEqual({ type: SET_FEEDBACK_OFFSETTOP, offset: 1000 })
})
test('setSidebarCollapsed action returns object', () => {
    expect(setSidebarCollapsed(1000)).toStrictEqual({ type: SET_SIDEBAR_COLLAPSED, status: 1000 })
})
test('setSkillsBar action returns object', () => {
    expect(setSkillsBar(1000)).toStrictEqual({ type: SET_SKILLS, payload: 1000 })
})
test('setEducationData action returns object', () => {
    expect(setEducationData(1000)).toStrictEqual({ type: SET_EDUCATION_DATA, payload: 1000 })
})