import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import auth from '/auth';

class Marshrut extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={auth} />
                <Route path='/main' component={App} />
            </Switch>
        )
    }
}

export default Marshrut;