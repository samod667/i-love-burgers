import React from 'react'

import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

export default function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}
