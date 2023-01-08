import "./Box.scss";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setAbout } from "../../redux/actionTypes";

export default function Box(props) {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	useEffect(() => {
		dispatch(setAbout(myRef.current.offsetTop ))
	})
	return (
		<>
			<div ref={myRef} id='section1' className="box">
				<h2 className="box__header">{props.title}</h2>
				<p className="box__paragraph">{props.content}</p>
			</div>
		</>
	);
}
