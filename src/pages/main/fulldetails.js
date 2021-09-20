import React, { useContext, useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router'
import { ItemContext } from '../../context/context';
import Style from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid, IconButton, Typography } from '@material-ui/core';
import axios from 'axios';

const Fulldetails = (props) => {
    const {state} = useContext(ItemContext);
    const [lyricsState,setLyricsState] = useState("Loading....")
    let { id } = useParams();
    useEffect(()=>{
        const fetch = async () =>{
            const lyrics=await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
            if(lyrics.data.message.body.length!==0)
            setLyricsState(lyrics.data.message.body.lyrics.lyrics_body)
            else setLyricsState("unknown");
         }
        fetch();
        window.scrollTo(0, 0);
    },[id])

    let history = useHistory();
    const classes= Style();



    return (
        <Grid container direction="column">
            <Grid item className={classes.arrowback}>
                <IconButton onClick={()=>{history.push("/")}}>
               <ArrowBackIcon />
               </IconButton>
            </Grid>
            <Grid item container direction="column">
                    <Grid item className={classes.Fulldetailsfield} >
                    <Typography variant="h6"><span className={classes.trackname}>{state.trackname}</span> by <span className={classes.artistname}>{state.artistname }</span></Typography>
                    </Grid>
                    <Grid item className={classes.Fulldetailsfield} >
                    <Typography variant="body2">{lyricsState}</Typography>
                    </Grid>
                    <Grid item className={classes.Fulldetailsfield}>
                    <Typography variant="body1">Album : {state.albumname }</Typography>
                    </Grid>
                    <Grid item className={classes.Fulldetailsfield}>
                    <Typography variant="body1">Album id : {state.albumid }</Typography>
                    </Grid>
            </Grid>

        </Grid>
    )
}

export default Fulldetails
