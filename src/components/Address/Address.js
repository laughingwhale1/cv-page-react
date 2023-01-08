import "./Address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setContacts } from "../../redux/actionTypes";

export default function Address() {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	useEffect(() => {
		dispatch(setContacts(myRef.current.offsetTop ))
	}, [])
	return (
		<section ref={myRef} id='section6' className="contacts">
			<h2 className="contacts__header">Contacts</h2>
			<div className="contacts__section">
				<ul>
					<li>
						<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
						<a href="tel:+380507258316">&nbsp;<strong>+38 050 725 83 16</strong></a>
					</li>
					<li>
						<FontAwesomeIcon icon={faEnvelope} />
						<a href="mailto:luckypalm95@gmail.com">
							&nbsp;<strong>luckypalm95@gmail.com</strong>
						</a>
					</li>
					<li>
						<FontAwesomeIcon icon={faLinkedin} />
						<a
							href="https://www.linkedin.com/in/rodion-doroshenko-a36572241/"
							target={"_blank"}
						>
							&nbsp;<strong>LinkedIn</strong><br />
						</a>
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebook} />
						<a
							href="https://www.facebook.com/profile.php?id=100017158210710"
							target={"_blank"}
						>
							&nbsp;<strong>Facebook<br /></strong>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
