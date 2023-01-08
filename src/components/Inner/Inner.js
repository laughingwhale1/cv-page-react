import React, { useEffect, useState } from "react";
import "./Inner.scss";
import Box from "../Box/Box";
import Panel from "../Panel/Panel";
import Timeline from "../Timeline/Timeline";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Address from "../Address/Address";
import Feedback from "../Feedback/Feedback";
import {
	boxTitle,
	boxContent,
	timeLineData,
	expData,
	feedbackData,
} from "../texts";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarCollapsed } from "../../redux/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Inner() {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	function scrollUp() {
		myRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
	}
	const isSidebarCollapsed = useSelector(
		(state) => state.sideBarReducer.status
	);
	// console.log('sidebar' , collapseSideBar)

	return (
		<div className={`${isSidebarCollapsed ? "parent2" : "parent"}`}>
			<div
				className={`${
					isSidebarCollapsed
						? "parent__navigation2"
						: "parent__navigation"
				}`}
			>
				<div
					className={`${
						isSidebarCollapsed
							? "parent__navigation-panel2"
							: "parent__navigation-panel"
					}`}
				>
					<div
						className="hideButton"
						onClick={() => {
							dispatch(setSidebarCollapsed(!isSidebarCollapsed));
						}}
					>
						<div className="hideButton__hyphen"></div>
						<div className="hideButton__hyphen"></div>
						<div className="hideButton__hyphen"></div>
					</div>
					<Panel />
				</div>
			</div>
			<div ref={myRef} className="parent__content">
				<Box title={boxTitle} content={boxContent} />
				<Timeline data={timeLineData} />
				<Experience data={expData} />
				<Skills />
				<Portfolio />
				<Address />
				<Feedback data={feedbackData} />
				<div className="buttonUp" onClick={scrollUp}>
					<button type="button" className="homeButton" >
						<FontAwesomeIcon icon={faChevronUp} />
					</button>
				</div>
			</div>
		</div>
	);
}
