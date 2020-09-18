import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {

    const sideDrawerClass = "SideDrawer " + (props.open ? "Open" : "Close");

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={sideDrawerClass}>
                <div className="LogoSideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default SideDrawer;