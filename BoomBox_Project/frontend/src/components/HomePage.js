import React, {useEffect, useState} from "react"
import {Grid, Button, ButtonGroup, Typography, } from '@material-ui/core'
import {Link} from 'react-router-dom'





const HomePage = () => { 

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align = "center">
            <Typography variant="h2" component="h2">
                BOOM BOX
            </Typography>
            </Grid>
            <Grid item xs={12} align = "center">
                <ButtonGroup disableElevation variant="contained" >
                    <Button color="primary" to="/join" component={Link}>
                        Join Room                              
                    </Button>
                    <Button color="secondary" to="/create" component={Link}>
                        Create Room                              
                    </Button>
                </ButtonGroup>
             </Grid>
        </Grid> 
    )
}
export default HomePage