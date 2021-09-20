import { Card, Typography } from '@material-ui/core'
import React from 'react'
import Style from '../main/style';

const About = () => {
    const classes = Style();
    return (
        <Card className={classes.aboutcard}>
           <Typography variant="h5" className={classes.abouthead}>About</Typography>
           <Typography variant="body1" className={classes.abouthead}>
               This is a Project app made in the process of learning react. Here songs lyrics can be easily searched.
               somtimes lyrics may not be found since a free api is used in this project, but normally it works fine.
               API used- Musixmatch
           </Typography>
        </Card>
    )
}

export default About
