import React from 'react';
import { NavLink } from 'react-router-dom';

import './adminnavbar.css';

const AdminNavBar = () => {
    return (
        <header className="main-navigation">
            <nav className="main-navigation__items">
                <ul>
                    <li>
                        <NavLink to="/books">
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/games">
                            Games
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add_book">
                            Add Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add_movie">
                            Add Movie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add_game">
                            Add Game
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AdminNavBar
