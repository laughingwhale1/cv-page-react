import "./Button.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

export default function Button(props) {
    const isSidebarCollapsed = useSelector((state) => state.sideBarReducer.status);
    if (props.icon && props.link) {
        return (<Link to={`${props.link}`}>
            <button
                type="button"
                className={`${isSidebarCollapsed ? "navButton-collapsed" : "homeButton"}`}
            >
                {props.symbol.symbol}
                &nbsp;<span>{props.title}</span>
            </button>
        </Link>);
    } else if (!props.link && props.icon) {
        return (<Link to={`${props.link}`}>
            <button type="button" className="homeButton">
                {props.symbol.symbol}
                {props.title}
            </button>
        </Link>);
    }
}
