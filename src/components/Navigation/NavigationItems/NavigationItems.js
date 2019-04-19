import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem"
const navigationItems = ()=>(
    <ul className={classes.NavigationItems}>
        <Link to="/">
            <NavigationItem active >Burger Builder</NavigationItem>
        </Link>
        <Link to="/checkout">
            <NavigationItem >Checkout</NavigationItem>
        </Link>
    </ul>
)

export default navigationItems