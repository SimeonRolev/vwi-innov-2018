import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './scss/main.scss';


import { Store } from './js/store/Store';
import Home from './js/pages/home/Home';


class App extends Component {
    constructor (props) {
        super(props);
        
        this.store = new Store();
    }

    render () {
        return (
            <Provider 
                store={this.store}
                assetStore={this.store.asset}
                UIStore={this.store.ui}
            >
                <Router>
                    <React.Fragment>
                        <Route exact path='/' component={ Home } />
                        <Route path='/search/:q' component={ Home } />
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
