import "./Timeline.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../redux/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { setEducationData } from "../../redux/actionTypes";
export default function Timeline(props) {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	const educationData = useSelector((state) => state.educationReducer.data);
	const fetchData = () => {
		return function (dispatch) {
			fetch("/education")
				.then((response) => response.json())
				.then((json) => {
					dispatch(setEducationData(json.data));
				})
				.catch((e) => console.log(e));
		};
	};
	useEffect(() => {
		dispatch(fetchData())
	}, []);
	useEffect(() => {
		dispatch(setEducation(myRef.current.offsetTop));
	}, []);
	return (
		<div ref={myRef} id="section2" className="timeLine">
			<h2 className="timeLineBox__header">Education</h2>
			{educationData ? (
				<div className="timeline__section">
					{educationData.map((item) => (
						<div className="timeLineBox__section" key={item.id}>
							<div className="timeLineBox__section-time">
								<h3 className="timeLineBox__section-time-date">
									{item.date}
								</h3>
								<div className="line"></div>
							</div>
							<div className="timeLineBox__section-article">
								<h3 className="timeLineBox__section-article-title">
									<div className="triangle">&#9650;</div>
									{item.title}
								</h3>
								<p className="timeLineBox__section-article-paragraph">
									{item.text}
								</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="icon">
					<FontAwesomeIcon
						className="icon-rotate"
						icon={faRotate}
					></FontAwesomeIcon>
				</div>
			)}
		</div>
	);
}

// {data ?
// <div ref={myRef} id="section2" className="timeLine">
// <h2 className="timeLineBox__header">Education</h2>
// {props.data.map((item) => (
// 	<div className="timeLineBox__section" key={item.id}>
// 		<div className="timeLineBox__section-time">
// 			<h3 className="timeLineBox__section-time-date">
// 				{item.date}
// 			</h3>
// 			<div className="line"></div>
// 		</div>
// 		<div className="timeLineBox__section-article">
// 			<h3 className="timeLineBox__section-article-title">
// 				<div className="triangle">&#9650;</div>
// 				{item.title}
// 			</h3>
// 			<p className="timeLineBox__section-article-paragraph">
// 				{item.text}
// 			</p>
// 		</div>
// 	</div>
// ))}
// </div> : <div className="icon"><FontAwesomeIcon className="icon-rotate" icon={faRotateRight}></FontAwesomeIcon></div>}
// <div ref={myRef} id="section2" className="timeLine">
// <h2 className="timeLineBox__header">Education</h2>
// {data ? props.data.map((item) => (
// 	<div className="timeLineBox__section" key={item.id}>
// 		<div className="timeLineBox__section-time">
// 			<h3 className="timeLineBox__section-time-date">
// 				{item.date}
// 			</h3>
// 			<div className="line"></div>
// 		</div>
// 		<div className="timeLineBox__section-article">
// 			<h3 className="timeLineBox__section-article-title">
// 				<div className="triangle">&#9650;</div>
// 				{item.title}
// 			</h3>
// 			<p className="timeLineBox__section-article-paragraph">
// 				{item.text}
// 			</p>
// 		</div>
// 	</div>
// )) : <div className="icon"><FontAwesomeIcon className="icon-rotate" icon={faRotateRight}></FontAwesomeIcon></div>}

// </div>
// 		<div ref={myRef} id="section2" className="timeLine">
// 		<h2 className="timeLineBox__header">Education</h2>
// 		{data ? props.data.map((item) => (
// 			<div className="timeLineBox__section" key={item.id}>
// 				<div className="timeLineBox__section-time">
// 					<h3 className="timeLineBox__section-time-date">
// 						{item.date}
// 					</h3>
// 					<div className="line"></div>
// 				</div>
// 				<div className="timeLineBox__section-article">
// 					<h3 className="timeLineBox__section-article-title">
// 						<div className="triangle">&#9650;</div>
// 						{item.title}
// 					</h3>
// 					<p className="timeLineBox__section-article-paragraph">
// 						{item.text}
// 					</p>
// 				</div>
// 			</div>
// 		)) : <div className="icon"><FontAwesomeIcon className="icon-rotate" icon={faRotateRight}></FontAwesomeIcon></div>}
// 	</div>
