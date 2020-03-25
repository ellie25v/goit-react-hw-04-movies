import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => (
    <div>
        <ul>
            <li>
                <NavLink exact to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/movies'>
                  Movies
                </NavLink>
            </li>
        </ul>
    </div>
);

export default Nav;