import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import About from '../about/about'
import Todo from '../todo/todo'

const Routes = function (props) {
    return (
        <Router history={hashHistory}>
            <route path='/todos' component={Todo} />
            <route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Router>
    )
}

export default Routes;