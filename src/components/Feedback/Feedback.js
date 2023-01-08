import "./Feedback.scss";
import pic from '../../assets/images/feedbacker.png'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setFeedback } from "../../redux/actionTypes";

export default function Feedback(props) {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	useEffect(() => {
		dispatch(setFeedback(myRef.current.offsetTop + 200))
	}, [])
	return (
		<section ref={myRef} id='section7' className="feedback">
			<h2 className="feedback__header">Feedbacks</h2>
			{props.data.map((item) => (
                // console.log(item)
				<div key={item.id}>
					<p className="feedback__testimonial">{item.feedback}</p>
					<img src={pic} alt='' className="feedback__user"/>
                    <p className="feedback__user-info">{item.reporter.name} {item.reporter.job} <a href={`${item.reporter.citeUrl}`} className="feedback__user-info-cite" target='_blank'>{item.reporter.citeUrl}</a></p>
				</div>
			))}
		</section>
	);
}
