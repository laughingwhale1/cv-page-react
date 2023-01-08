import "./Home.scss";
import PhotoBox from "../PhotoBox/PhotoBox";
import Button from "../Button/Button";
import { name, title, homeButtonTitle } from "../texts";

function Home() {
	return (
		<section className="greetingPage">
			<div className="greetingPage__wrapper">
				<PhotoBox name={name} title={title}></PhotoBox>
				<Button title={homeButtonTitle} link={'/main'}/>
			</div>
		</section>
	);
}

export default Home;