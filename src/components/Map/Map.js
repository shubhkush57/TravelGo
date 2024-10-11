import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper , Typography, useMediaQuery}from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationCityOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery(`{min-widht:600px}`);
    const cord = {lat: 0, log: 0};
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{key: ''}}
            defaultCenter={cord}
            center = {cord}
            defaultZoom={14}
            margin = {[50, 50,50,50]}
            options = {''}
            onChange={''}
            onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map