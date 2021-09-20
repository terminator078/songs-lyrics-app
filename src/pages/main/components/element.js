import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AlbumIcon from '@material-ui/icons/Album';
import GradeIcon from '@material-ui/icons/Grade';
import Style from '../style';
import { useHistory } from 'react-router';
import { ItemContext } from '../../../context/context';

const Element = (props) => {
    const {dispatch} = useContext(ItemContext)
    let history = useHistory()
    const classes = Style();
    return (
        <Grid item className={classes.elementcard}>
        <Card className={classes.card}>
            <CardContent>
                <div>
                <Typography variant="body1">{props.element.track.artist_name}</Typography>
                </div>
                <div>
                <PlayCircleFilledIcon fontSize="small" className={classes.cardicon}/>
                <Typography variant="button" >{props.element.track.track_name}</Typography>
                </div>
                <div>
                <AlbumIcon fontSize="small" className={classes.cardicon}/>
                <Typography variant="button">{props.element.track.album_name}</Typography>
                </div>
                <div>
                <GradeIcon fontSize="small" className={classes.cardicon}/>
                <Typography variant="button">{props.element.track.track_rating}</Typography>
                </div>
            </CardContent>
            <CardActions>
               <Button color="primary" variant="outlined" fullWidth
                onClick={()=>{history.push(`/track/${props.element.track.commontrack_id}`);dispatch({type:"track",payload:{
                    trackname:props.element.track.track_name,
                    artistname:props.element.track.artist_name,
                    albumname:props.element.track.album_name,
                    albumid:props.element.track.album_id ,
                }})}}
                >view lyrics</Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default Element
