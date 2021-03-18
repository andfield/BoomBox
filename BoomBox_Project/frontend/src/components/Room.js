import React, {useState, useEffect} from 'react'

const Room=(props) => {

    const [votesToSkip, changeVotesToSkip]=useState(null)
    const [guestCanPause, changeGuestCanPause]=useState(false)
    const [isHost, changeIsHost]=useState(false)
    const code=props.match.params.code

    useEffect(() => {
        fetch('/api/get-room'+'?code='+code)
            .then((response) => response.json())
            .then((data) => {
                changeVotesToSkip(data.votes_to_skip)
                changeGuestCanPause(data.guest_can_pause)
                changeIsHost(data.is_host)
            })

    }, {})

    return (
        <div>
            <h1>{code}</h1>
            <h3>Votes: {votesToSkip}</h3>

            <h3>Guest can pause: {guestCanPause.toString()}</h3>

            <h3>Host: {isHost.toString()}</h3>
        </div>
    )
}

export default Room
