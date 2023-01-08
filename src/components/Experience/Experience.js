import "./Experience.scss";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setExperience } from "../../redux/actionTypes";

export default function Experience(props) {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	useEffect(() => {
		dispatch(setExperience(myRef.current.offsetTop ))
	}, [])
	return (
		<section ref={myRef} id='section3' className="exp">
			<h2 className="exp__header">Experience</h2>
			{props.data.map((item, index) => (
				<div className="exp__section" key={index}>
					<div className="exp__section-company">
						<h3>{item.info.company}</h3>
						<p>{item.date}</p>
					</div>
					<div className="exp__section-position">
						<h3>{item.info.job}</h3>
						<p>{item.info.description}</p>
					</div>
				</div>
			))}
		</section>
	);
}
