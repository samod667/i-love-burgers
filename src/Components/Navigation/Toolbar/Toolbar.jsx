import React from 'react'

import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default function Toolbar(props) {
    return (
      <div>
        <header className={classes.Toolbar}>
          <DrawerToggle clicked={props.drawerToggleClicked} />
          <Logo />
          <nav className={classes.DesktopOnly}>
            <NavigationItems />
          </nav>
        </header>
      </div>
    );
}
