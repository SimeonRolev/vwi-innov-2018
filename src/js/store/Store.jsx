import React from 'react';

import AssetStore from './Asset';
import UIStore from './UI';
import { inject, observer } from 'mobx-react';

const StoreContext = React.createContext('store');

class StoreProvider extends React.Component {
    render () {
        return (
            <StoreContext.Provider value={this.props.store}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

class Store {
    constructor () {
        this.asset = new AssetStore(this);
        this.UI = new UIStore(this);
    }
}

const withStore = function (component, store = 'store') {
    return inject(store)(observer(component))
};

export { 
    Store, 
    StoreProvider, 
    StoreContext,
    withStore
};
