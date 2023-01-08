import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faGraduationCap,
	faPencil,
	faBriefcase,
	faPaperPlane,
	faComment,
	faChevronLeft,
	faChevronUp,
	faGem,
	faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

//home page
export const name = "Rodion Doroshenko";
export const title = "Developer. Coding enjoyer. Trust the professional.";

//button content
export const homeButtonTitle = "Know more";
export const innerButtonTitle = `Go back`;
export const innerButtonIcon = {
	symbol: <FontAwesomeIcon icon={faChevronLeft} />,
};
export const innerButtonIconGoUp = {
	symbol: <FontAwesomeIcon icon={faChevronUp} />,
};
export const innerSkillsSectionButtonTitle = 'Open edit';
export const innerSkillsSectionButtonIcon = {
	symbol: <FontAwesomeIcon icon={faPenToSquare} /> 
}
export const innerSkillsSectionButtonTitleAddSkill = 'Add skill';
//box content
export const boxTitle = "About me";
export const boxContent =
	"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque ";


export const navigationBarData = [
	{
		id: 0,
		name: "About me",
		icon: <FontAwesomeIcon icon={faUser} />,
	},
	{
		id: 1,
		name: "Education",
		icon: <FontAwesomeIcon icon={faGraduationCap} />,
	},
	{
		id: 2,
		name: "Experience",
		icon: <FontAwesomeIcon icon={faPencil} />,
	},
	{
		id: 3,
		name: 'Skills',
		icon: <FontAwesomeIcon icon={faGem} />
	},
	{
		id: 4,
		name: "Portfolio",
		icon: <FontAwesomeIcon icon={faBriefcase} />,
	},
	{
		id: 5,
		name: "Contacts",
		icon: <FontAwesomeIcon icon={faPaperPlane} />,
	},
	{
		id: 6,
		name: "Feedback",
		icon: <FontAwesomeIcon icon={faComment} />,
	},
];
export const timeLineData = [
	{
		id: 0,
		date: 2000,
		title: "Title1",
		text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.",
	},
	{
		id: 1,
		date: 2001,
		title: "Title2",
		text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.",
	},
	{
		id: 2,
		date: 2002,
		title: "Title3",
		text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.",
	},
	{
		id: 3,
		date: 2003,
		title: "Title4",
		text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.",
	},
];
export const expData = [
	{
		date: "2013-2014",
		info: {
			company: "Google",
			job: "Front-end developer / php programmer",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil",
		},
	},
	{
		date: "2012",
		info: {
			company: "Twitter",
			job: "Web developer",
			description:
				"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim",
		},
	},
];
export const feedbackData = [
	{
		feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		id: 0,
		reporter: {
			name: 'Martin Philips',
			job: 'Programmer,',
			citeUrl: 'somesite.com'
		}
	},
	{
		feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
		id: 1,
		reporter: {
			name: 'Mike Franchesko',
			job: 'Web developer,',
			citeUrl: 'somesite.com'
		}
	}
]
export const skillsPreset = [
	{
		skillName: 'HTML5',
		proficiency: 90
	},
	{
		skillName: 'CSS3',
		proficiency: 85
	},
	{
		skillName: 'JavaScript',
		proficiency: 75
	},
]