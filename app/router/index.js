import React from 'react'
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import Container from '../components/Container'
import NoMatch from '../components/NoMatch'

export default ()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/:web/:data" component={Container}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    )
}