import "./Navigation.scss";
import Scrollspy from "react-scrollspy";
import { useSelector } from "react-redux";

export default function Navigation(props) {
	const [...about] = useSelector((state) =>
		[].concat(state.offsetReducer.value)
	);
	return (
		<Scrollspy
			items={[
				"section1",
				"section2",
				"section3",
				"section4",
				"section5",
				"section6",
				"section7",
			]}
			currentClassName="iscurrent"
			offset={-100}
			className="navList"
		>
			{props.data.map((item) => (
				<li
					key={item.id}
					className="navList__item"
					onClick={() => {
						window.scrollTo({
							top: about[item.id],
							behavior: "smooth",
						});
					}}
				>
					<div>{item.icon}</div>
					<span>{item.name}</span>
				</li>
			))}
		</Scrollspy>
	);
}
