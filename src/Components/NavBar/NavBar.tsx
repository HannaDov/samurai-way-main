import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.css'


export const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/user" activeClassName={classes.active}>UserWithUseSelector</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/setting" activeClassName={classes.active}>Setting</NavLink>

            </div>

        </nav>
    )
}