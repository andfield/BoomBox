import React, {useState} from "react"
import {Button, Grid, Typography, TextField, FormControl, FormHelperText, Radio, RadioGroup, FormControlLabel, FormLabel} from '@material-ui/core'
import {Link} from 'react-router-dom'

const CreateRoom=() => {

    var defaultvotes=2

    const [guestCanPause, changeGuestCanPause] = useState(true)
    const [votesToSkip, changeVotesToSkip] = useState(defaultvotes)

    const handleClick = () =>{
        console.log(guestCanPause, votesToSkip)

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestCanPause,
            })
        }
        fetch('/api/create-room', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Create a New Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Guest Control of PlayBack State
                        </div>
                        <RadioGroup row defaultValue="true" onChange={() => changeGuestCanPause(false)}>
                            <FormControlLabel value="true"
                                control={<Radio color="primary" />}
                                label="Play/Pause"
                                labelPlacement="bottom" />
                            <FormControlLabel value="false"
                                control={<Radio color="secondary" />}
                                label="Can't Control"
                                labelPlacement="bottom" />
                        </RadioGroup>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true}
                        type="number"
                        defaultValue={defaultvotes}
                        onChange={e => changeVotesToSkip(e.target.value)}
                        inputProps={{min: 1, style: {textAlign: 'center'}}} />
                    <FormHelperText>
                        <div align="center">
                            Votes required to skip songs
                         </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={ handleClick }>
                    Create A Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Go Back
                </Button>
            </Grid>
        </Grid>
    )
}

export default CreateRoom