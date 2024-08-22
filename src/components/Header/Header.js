import React from 'react'
import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import {AppBar, Toolbar, Typography, Box,InputBase} from '@material-ui/core';
import useStyles from './styles';
const Header = () => {
 const classes = useStyles();
  return (
    <AppBar position='static'>
        <Toolbar className = {classes.toolbar}>
            <Typography variant='h5' className= {classes.title}>
                Travel Go
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Explore New Places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon} >
                            <SearchIcon />
                        </div>
                        <InputBase placeholder = "Serach new places...." classes = {{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header