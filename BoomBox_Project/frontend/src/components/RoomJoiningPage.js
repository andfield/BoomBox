import React, {useState, useEffect} from "react"
import {TextField, Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const RoomJoining=(props) => {

    const [roomCode, changeCode]=useState()
    const [error, changeError]=useState()

    const buttonClick=() => {
        console.log(roomCode)

        const requestOptions={
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                code: roomCode
            })
        }

        fetch('/api/join-room', requestOptions).
            then((response) => {
                if (response.ok) {
                    console.log(roomCode)
                    props.history.push('/room/'+roomCode)
                }
                else {
                    changeError({error: 'Room Not Found.'})
                }
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <Grid container spacing={1} >
            <Grid item xs={12} align="center">
                <Typography variant='h3' component="h3">
                    Join a Room.
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <TextField
                    onChange={e => {changeCode(e.target.value)}}
                    error={error}
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={roomCode}
                    helperText={error}
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={buttonClick}>
                    Enter Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}
export default RoomJoining
