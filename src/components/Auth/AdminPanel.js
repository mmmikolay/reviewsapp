import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <header className="main-navigation">
            <nav className="main-navigation__items">
                <ul>
                    <li>
                        <NavLink to="/add_book">
                            Add Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add_author">
                            Add Author
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AdminPanel;
