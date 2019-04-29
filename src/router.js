import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from "./login/login.js";
import Register from "./register/register.js"
import ErrorPage from "./404/404.js";
class Router extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                <Route component={ErrorPage}/>
            </Switch>
        );
    }
}

export default Router;