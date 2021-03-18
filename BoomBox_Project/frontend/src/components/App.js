import React from 'react'
import RoomJoining from './RoomJoiningPage'
import CreateRoom from './CreateRoomPage'
import HomePage from './HomePage'

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/join" component={RoomJoining} />
                <Route path="/create" component={CreateRoom} />
            </Switch>
        </Router>
    )
}
export default App