import React, {useEffect, useState} from 'react'
import RoomJoining from './RoomJoiningPage'
import CreateRoom from './CreateRoomPage'
import HomePage from './HomePage'

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Room from './Room'

const App=() => {
    const [roomCode, changeRoomCode] = useState()

    useEffect(() => {
        fetch('/api/user-in-room')
            .then((response) => response.json())
            .then((data) => {
                changeRoomCode(data.code)
                console.log('room code' + roomCode)
            })

    }, {})
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return roomCode ? <Redirect to={`/room/${roomCode}`} /> : <HomePage />
                }} />
                <Route path="/join" component={RoomJoining} />
                <Route path="/create" component={CreateRoom} />
                <Route path="/room/:code" component={Room} />
            </Switch>
        </Router>
    )
}
export default App