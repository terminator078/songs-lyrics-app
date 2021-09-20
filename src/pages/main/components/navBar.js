import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import Style from '../style';

const NavBar = () => {
    let history = useHistory();
    const classes = Style();
    return (
        <AppBar position="static" color="default" className={classes.appbar}>
       <Toolbar>
    <Typography variant="h6" className={classes.heading} onClick={()=>{history.push("/")}}>
      EasyLyrics
    </Typography>
    <Typography variant="h6" className={classes.heading} onClick={()=>{history.push("/about")}}>
      About
    </Typography>
      </Toolbar>
    </AppBar>
    )
}

export default NavBar
