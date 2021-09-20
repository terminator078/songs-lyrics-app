import { Button, Card, Grid, Typography } from '@material-ui/core';
import  SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import React, { useContext, useState } from 'react'
import Style from '../style'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { ItemContext } from '../../../context/context';
import Element from './element';
import axios from 'axios';

const Player = () => {
    const classes = Style();
    const {state,dispatch} = useContext(ItemContext)
    const [input,setInput] = useState();

    const search = (e) =>{
      e.preventDefault();
      if(input===""||input===undefined){alert("void serach");return;}
      dispatch({type:"loadsearch"});
      searchdispatch();
      setInput("");
    }

    const searchdispatch = async () =>{
      const searchdata = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${input}&page_size=10&page=10&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`)
      let data;
      if(searchdata.data.message.body!==0)data=searchdata.data.message.body.track_list;else data=[];
      dispatch({type:"search",payload:data});
      
  }

    return (
      <Grid container direction="column" className={classes.player}>
       <Grid item>
         <div className={classes.musicIcon}>
          
         <MusicNoteIcon fontSize="large"/>
         <Typography variant="h4">
           Get Lyrics Easily
         </Typography>
         </div>
       </Grid>

        <Grid item>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={search}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div >
            <div >
            <InputBase
              placeholder="Search Lyrics or artist..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              fullWidth
              inputProps={{ 'aria-label': 'search' }}
              value={input||""}
              onChange={(e)=>{setInput(e.target.value)}}
            />
            </div>
          </div>
          <Button type="submit" color="primary" variant="outlined" fullWidth>get</Button>
          </form>
        </Grid>
        

        <Card variant="outlined">

        <Grid item container direction="column" className={classes.marginheading}>
          <Card key={"card1"}>
         <Grid item >
           <Typography className={classes.marginheadingtop10} variant="h6">Search Results</Typography>
         </Grid>
         <Grid item container direction="column" alignItems="center" justifyContent="center">
         <Card key={"card2"}>
          {
              state.toptracks!==undefined?(
                state.toptracks.map((element,index)=><Element element={element} key={index} />)
              ):(
                <Grid item className={classes.results}>
                 <Typography variant="body2">Loading....</Typography>
               </Grid>
              )
          }
          </Card>
         </Grid>
         </Card>
        </Grid>

        <Grid item container direction="column" className={classes.marginheading}>
          <Card key={"card3"}>
         <Grid item >
           <Typography className={classes.marginheadingtop10} variant="h6">India Top 10 Tracks</Typography>
         </Grid>
         <Grid item container direction="column" alignItems="center" justifyContent="center">
         <Card> key={"card4"}
          {
              state.countrytracks.length?(
                state.countrytracks.map((element,index)=><Element element={element} key={index} />)
              ):(
                <Grid item className={classes.results}>
                 <Typography variant="body2">Loading....</Typography>
               </Grid>
              )
          }
          </Card>
         </Grid>
         </Card>
        </Grid>

        </Card>

      
      </Grid>

    )
}

export default Player
