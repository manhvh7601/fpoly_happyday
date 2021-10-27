import { Switch } from 'antd';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Add from './Add';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/create" component={Add} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
