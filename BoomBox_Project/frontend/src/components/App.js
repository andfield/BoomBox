import React from 'react'
import RoomJoining from './RoomJoiningPage'
import CreateRoom from './CreateRoomPage'
import HomePage from './HomePage'

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Room from './Room'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/join" component={RoomJoining} />
                <Route path="/create" component={CreateRoom} />
                <Route path="/room/:code" component={Room} />
            </Switch>
        </Router>
    )
}
export default App