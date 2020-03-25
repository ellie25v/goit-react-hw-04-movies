import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './nav.module.css'

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.navListItem}>
                <NavLink className={styles.link}
                activeClassName={styles.activeLink}
                 exact to='/'>
                    Home
                </NavLink>
            </li>
            <li className={styles.navListItem}>
                <NavLink className={styles.link}
                activeClassName={styles.activeLink}
                to='/movies'>
                  Movies
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;