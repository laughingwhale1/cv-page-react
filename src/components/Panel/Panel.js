import "./Panel.scss";
import PhotoBox from "../PhotoBox/PhotoBox";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import {name, navigationBarData, innerButtonTitle, innerButtonIcon} from "../texts";
import {useSelector} from "react-redux";

export default function Panel() {
    const isSidebarCollapsed = useSelector((state) => state.sideBarReducer.status);


    return (<>
        <PhotoBox name2={name}/>
        <Navigation data={navigationBarData}/>
        <div className={`${isSidebarCollapsed ? 'navButton-collapsed' : 'navButton'}`}> <Button link={'/'} title={innerButtonTitle} symbol={innerButtonIcon} icon={true}/></div>
    </>);
}
