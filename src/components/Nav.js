import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

const Nav = () => {
    return (
        <header>
            <nav className='row space-between'>
                <ul className='row'>
                    <li>
                        <NavLink
                            className='nav-link'
                            activeStyle={activeStyle}
                            to="/"
                            exact
                        >
                            Trending Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='nav-link'
                            activeStyle={activeStyle}
                            to="/search"
                        >
                            Search Page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
