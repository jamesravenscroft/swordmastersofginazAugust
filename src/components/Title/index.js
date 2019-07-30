import React from 'react';
import MenuTitle from "./titleMenu.png";
import {Animated} from "react-animated-css";
import "./style.css";

function Title () {
    return (
        <div id="titleDiv">
            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
    <div>
            <img src={MenuTitle} alt="Swordmasters of Ginaz" width="900px"/>
        </div>
        </Animated></div>
    );
}


export default Title;