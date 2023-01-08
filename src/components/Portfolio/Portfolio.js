import "./Portfolio.scss";
import lupa from "../../assets/images/lupa.png";
import ladder from "../../assets/images/ladder.png";
import { useDispatch } from "react-redux";
import { setPortfolio } from "../../redux/actionTypes";
import React, { useEffect, useState} from "react";

export default function Portfolio() {
	const dispatch = useDispatch();
	const myRef = React.createRef();
	useEffect(() => {
		dispatch(setPortfolio(myRef.current.offsetTop ))
	}, [])
	const [codeHidden, setCodeHidden] = useState(false);
	const [uiHidden, setUiHidden] = useState(false);
	const [allBlacked, setAllBlacked] = useState(true)
	const [codeBlacked, setCodeBlacked] = useState(false)
	const [uiBlacked, setUiBlacked] = useState(false)
	function isClicked(e) {
		if (e.target.classList[1] === "code") {
			setUiBlacked(false)
			setAllBlacked(false)
			setCodeBlacked(true)
			setUiHidden(true);
			setCodeHidden(false);
		} else if (e.target.classList[1] === "ui") {
			setUiBlacked(true)
			setAllBlacked(false)
			setCodeBlacked(false)
			setUiHidden(false);
			setCodeHidden(true);
		} else {
			setUiBlacked(false)
			setCodeBlacked(false)
			setAllBlacked(true)
			setUiHidden(false);
			setCodeHidden(false);
		}
	}
	return (
		<section ref={myRef} className="portfolio" id='section5'>
			<h2 className="portfolio__header">Portfolio</h2>
			<ul className="portfolio__list">
				<li className={`portfolio__list-item all ${allBlacked ? 'blacked' : ''}`} onClick={isClicked}>
					All /
				</li>
				<li className={`portfolio__list-item code ${codeBlacked ? 'blacked' : ''}`} onClick={isClicked}>
					&nbsp;Code /
				</li>
				<li className={`portfolio__list-item ui ${uiBlacked ? 'blacked' : ''}`} onClick={isClicked}>
					&nbsp;UI
				</li>
			</ul>
			<div className="grid">
				<article
					className={`grid-item-code ${codeHidden ? "hidden" : ""}`}
				>
					<img src={lupa} alt="" />
					<div className="shown">
						<h3>Title</h3>
						Donec pede justo, fringilla vel, aliquet nec, vulputate
						eget, arcu. In enim justo, rhoncus ut, imperdiet a,
						venenatis vitae, justo. Nullam dictum felis eu pede
						mollis{" "}
					</div>
				</article>
				<article className={`grid-item-ui ${uiHidden ? "hidden" : ""}`}>
					<img src={ladder} alt="" />
					<div className="shown">
						<h3>Title</h3>
						Donec pede justo, fringilla vel, aliquet nec, vulputate
						eget, arcu. In enim justo, rhoncus ut, imperdiet a,
						venenatis vitae, justo. Nullam dictum felis eu pede
						mollis{" "}
					</div>
				</article>
				<article
					className={`grid-item-code ${codeHidden ? "hidden" : ""}`}
				>
					<img src={lupa} alt="" />
					<div className="shown">
						<h3>Title</h3>
						Donec pede justo, fringilla vel, aliquet nec, vulputate
						eget, arcu. In enim justo, rhoncus ut, imperdiet a,
						venenatis vitae, justo. Nullam dictum felis eu pede
						mollis{" "}
					</div>
				</article>
				<article className={`grid-item-ui ${uiHidden ? "hidden" : ""}`}>
					<img src={ladder} alt="" />
					<div className="shown">
						<h3>Title</h3>
						Donec pede justo, fringilla vel, aliquet nec, vulputate
						eget, arcu. In enim justo, rhoncus ut, imperdiet a,
						venenatis vitae, justo. Nullam dictum felis eu pede
						mollis{" "}
					</div>
				</article>
			</div>
		</section>
	);
}
