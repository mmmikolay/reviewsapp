import React from 'react'
import { NavLink} from 'react-router-dom';
import Cookies from 'js-cookie';

//STYLES
import './sidedrawer.css';

const SideDrawer = ({ show }) => {
    let signedIn = Cookies.get("signedin");
    let drawerClasses = "side-drawer";
    if(show){
        drawerClasses = "side-drawer open";
    }

    return (
        <div>
            <nav className={drawerClasses}>
                <ul>
                    <h2>REVIEWS APP</h2>
                    <li><NavLink to="/">Main Menu</NavLink></li>

                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/games">Games</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    
                    {signedIn && <><li><NavLink to="/add_book">Add Book</NavLink></li>
                    <li><NavLink to="/add_game">Add Game</NavLink></li>
                    <li><NavLink to="/add_movie">Add Movie</NavLink></li></>}
                </ul>    
            </nav>            
        </div>
    )
}

export default SideDrawer
