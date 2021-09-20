import React from 'react'
import { Route } from 'react-router-dom'
import Player from './components/player'
import About from '../about/about'
import { Grid } from '@material-ui/core'
import Fulldetails from './fulldetails'

const Main = () => {
    return (
            <Grid item xs={12} sm={6}>
              <Route path="/" component={Player} exact/>
              <Route path="/about" component={About} exact/>
              <Route path="/track/:id" children={<Fulldetails  />} />
          </Grid>
    )
}

export default Main
