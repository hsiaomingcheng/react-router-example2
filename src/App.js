import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './View/Home';
import About from './View/About';
import News from './View/News';

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route path="/" component={Home} />
                </Switch>

                <div className="App" />
            </Router>
        );
    }
}

export default hot(module)(App);
