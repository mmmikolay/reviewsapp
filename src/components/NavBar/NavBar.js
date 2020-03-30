import React, {useState, useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {HomeButtonDark} from '../Buttons/HomeButton';
import Cookies from 'js-cookie';
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../SideDrawer/Backdrop";

//CONTEXT
import AuthContext from '../../context/auth-context';

import './navbar.css';

const NavBar = () => {
    let history = useHistory();
    const context = useContext(AuthContext);
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const signedIn = context.success;

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(prevState => !prevState);
    }
    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }

    const logoutHandler = () => {
        context.logout();
        history.push("/");
    }

    let backdrop;
    if(sideDrawerOpen){
        backdrop = <Backdrop clickHandler = {backdropClickHandler}/>;
    }

    return (
        <header className="main-navigation">
            <nav className="main-navigation__items">
                <div style={{cursor:"pointer"}}onClick={()=>history.push("/")}>
                    <h2>REVIEWS APP</h2>
                </div>
            <div className="spacer"></div>
                <div className="main-navigation__list">
                    <ul>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/games">Games</NavLink></li>

                        {signedIn === true && <><li><NavLink to="/add_book">Add Book</NavLink></li>
                        <li><NavLink to="/add_movie">Add Movie</NavLink></li>
                        <li><NavLink to="/add_game">Add Game</NavLink></li>
                        <li><button onClick={() => logoutHandler()}>Log Out</button></li></>}
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