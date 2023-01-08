import "./Skills.scss";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/actionTypes";
import Button from "../Button/Button";
import {
	innerSkillsSectionButtonTitle,
	innerSkillsSectionButtonIcon,
	innerSkillsSectionButtonTitleAddSkill,
	skillsPreset,
} from "../texts";
import useLocalStorage from "use-local-storage";
import { setSkillsBar } from "../../redux/actionTypes";

const validate = (values) => {
	const errors = {};
	if (!values.skillName) {
		errors.skillName = "Skill name is a required field";
	}

	if (!values.proficiency) {
		errors.proficiency = "Proficiency is a required field";
	} else if (Number(values.proficiency) > 100 ||  Number(values.proficiency) < 10) {
		errors.proficiency = "Must be greater than or equal to 10 or less than or equal to 100";
	} else if (!/^\d+$/.test(values.proficiency)) {
		errors.proficiency = 'Must be a number'
	}

	return errors;
};

export default function Skills() {
	const [isFormHidden, setIsFormHidden] = useState(true);
	const dispatch = useDispatch();
	const myRef = React.createRef();
	const skillsSet = useSelector((state) => state.skillsReducer.skills);
	useEffect(() => {
		dispatch(setSkills(myRef.current.offsetTop));
	}, []);
	const formik = useFormik({
		initialValues: {
			skillName: "",
			proficiency: "",
		},
		onSubmit: (values) => {
			console.log(values);
			dispatch(setSkillsBar(values));
			localStorage.setItem(
				"skills",
				JSON.stringify([...skillsSet, values])
			);
			formik.setValues({ skillName: "", proficiency: "" })
		},
		validate
	});
	return (
		<section ref={myRef} className="skillBox" id="section4">
			<h2 className="skillBox__header">Skills</h2>
			<div
				className="skillBox__editBtn"
				onClick={() => setIsFormHidden(!isFormHidden)}
			>
				<Button
					// link={"#"}
					icon={true}
					title={innerSkillsSectionButtonTitle}
					symbol={innerSkillsSectionButtonIcon}
				/>
			</div>
			<div
				className={`skillBox__form ${
					isFormHidden ? "form-hidden" : ""
				}`}
			>
				<form className="form" onSubmit={formik.handleSubmit}>
					<label className="form__label" >
						Skill name:
					</label>
					<input
						placeholder="Enter skill name"
						className="form__input"
						id="skillName"
						name="skillName"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.skillName}
					/>
					{formik.errors.skillName ? <div className="errorMsg">{formik.errors.skillName}</div> : null}
					<br />
					<label className="form__label" >
						Skill range:
					</label>
					<input
						placeholder="Enter skill range"
						className="form__input"
						id="proficiency"
						name="proficiency"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.proficiency}
					/>
					{formik.errors.proficiency ? <div className="errorMsg">{formik.errors.proficiency}</div> : null}
					<div
						className="skillBox__form-submit-button"
						onClick={() => console.log(formik.errors)}
					>
						<Button
							type={'submit'}
							onClick={() => console.log(formik.errors)}
							title={innerSkillsSectionButtonTitleAddSkill}
							disabled={formik.errors.proficiency || formik.errors.skillName}
						/>
					</div>
				</form>
			</div>
			<div className="skillBox__section">
				{localStorage.getItem("skills")
					? JSON.parse(localStorage.getItem("skills")).map(
							(item, index) => (
								<div
									style={{ width: `${item.proficiency}%` }}
									key={index}
									className="skill"
								>
									{item.skillName}
								</div>
							)
					  )
					: skillsSet.map((item, index) => (
							<div
								style={{ width: `${item.proficiency}%` }}
								key={index}
								className="skill"
							>
								{item.skillName}
							</div>
					  ))}
				<div className="scale">
					<div className="beginner">
						<p>Beginner</p>
					</div>
					<div className="proficient">
						<p>Proficient</p>
					</div>
					<div className="expert">
						<p>Expert</p>
					</div>
					<div className="master">
						<p>Master</p>
					</div>
				</div>
			</div>
		</section>
	);
}
