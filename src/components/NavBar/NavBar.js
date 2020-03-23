import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {HomeButtonDark} from '../Buttons/HomeButton';
import Cookies from 'js-cookie';
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../SideDrawer/Backdrop";

import './navbar.css';

const NavBar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    let signedIn = Cookies.get("signedin");

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(prevState => !prevState);
    }
    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }

    let backdrop;
    if(sideDrawerOpen){
        backdrop = <Backdrop clickHandler = {backdropClickHandler}/>;
    }

    return (
        <header className="main-navigation">
            <nav className="main-navigation__items">
                <h2>REVIEWS APP</h2>
            <div className="spacer"></div>
                <div className="main-navigation__list">
                    <ul>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/games">Games</NavLink></li>

                        {signedIn && <><li><NavLink to="/add_book">Add Book</NavLink></li>
                        <li><NavLink to="/add_movie">Add Movie</NavLink></li>
                        <li><NavLink to="/add_game">Add Game</NavLink></li></>}
                    </ul>
                </div>
                <div className="nav-button-container">
                <HomeButtonDark />
                </div>
                
                <div className="mobile-menu">
                    <div className="mobile-menu-button-container" onClick={()=>drawerToggleClickHandler()}>
                        <IconContext.Provider value={{ color: "#191919", className: "global-class-name", size: "3.2em"}}>
                            <div>
                                <MdMenu />
                            </div>
                        </IconContext.Provider>
                    </div>
                    <SideDrawer show={sideDrawerOpen}/>
                    {backdrop}
                </div>
            </nav>

        </header>
    )
}

export default NavBar
