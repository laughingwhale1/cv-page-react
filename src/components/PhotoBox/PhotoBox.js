import "./PhotoBox.scss";
import pic from "../../assets/images/me.png";
import {useSelector} from 'react-redux'

function PhotoBox(props) {
    const isSidebarCollapsed = useSelector((state) => state.sideBarReducer.status)
    if (props.name) {
        return (
            <>
                <div className="photoBox">
                    <figure>
                        <img
                            className="photoBox__avatar"
                            src={pic}
                            alt="pic"
                            width={"163px"}
                            height={"163px"}
                        />
                    </figure>
                    <h1 className="photoBox__name">{props.name}</h1>
                    <h3 className="photoBox__name2">{props.name2}</h3>
                    <h3 className="photoBox__title">{props.title}</h3>
                    <p className="photoBox__description">{props.description}</p>
                </div>
            </>
        )
    } else if (props.name2) {
        return (
            <>
                <div className="photoBox">
                    <figure>
                        <img
                            className={`${isSidebarCollapsed ? 'photoBox__avatar2' : 'photoBox__avatar'}`}
                            src={pic}
                            alt="pic"
                            width={"100px"}
                            height={"100px"}
                        />
                    </figure>
                    <h3 className="photoBox__name2">{props.name2}</h3>
                </div>
            </>
        )
    }
}

export default PhotoBox;
