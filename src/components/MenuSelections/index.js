import React from 'react';
import "./menu.css";
import {Animated} from "react-animated-css";
const MenuSelect = () => {
    return (
        <div className="card" id="title">
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay="2250">
    <div>   <h6><u>Full Screeen Desktop Version</u></h6>
            <ul id="menuul">
                <li>
                    <a href="/intro">New Game</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
                <li>
                    <a href="/LeaderBoard">Leader Board</a>
                </li>
                <li>
                    <a href="/Store">Item Shop</a>
                </li>
                <li>
                    <a href="https://vimeo.com/346965384">Trailer</a>
                </li>
                <li>
                    <a href="/thankyou">Credits</a>
                </li>
            </ul></div></Animated>
        </div>
    );
}


export default MenuSelect;
