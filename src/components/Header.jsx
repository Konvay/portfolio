import React from 'react'
import {
    Link
} from 'react-router-dom'

import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
} from '@material-ui/core'

import {
    Home
} from '@material-ui/icons'

import '../styles/Header.scss'

const Header = () => {
    return (
        <AppBar style={navbarStyles.navbar} position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu"
                     component={Link} to="">
                    <Home />
                </IconButton>
                <Button className="navbar-link" component={Link} to="/about">
                    About
                </Button>
                {/*
                <Button className="navbar-link" component={Link} to="/fault">
                    Fault
                </Button>
                */}
            </Toolbar>
        </AppBar>
    )
}

export default Header

const navbarStyles = {
    navbar: {
        backgroundColor: "#006699"
    },
    links: {
        aLink: "#FFF",
        aVisited: "#FFF",
        aHover: "#FFF",
        aActive: "#FFF"
    }
}