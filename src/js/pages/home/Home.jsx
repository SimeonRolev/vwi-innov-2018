import React, { Component } from 'react';

import { withStore } from 'js/store/Store';
import Collection from 'js/store/Collection';
import HomeAsset from './HomeAsset';
import Header from '../../components/Header';

import 'scss/pages/home.scss';


class Home extends Component {
    constructor (props) {
        super(props);
        this.itemCollection = new Collection(this.props.assetStore.assets);
    }

    componentDidMount () {
        this.props.assetStore.loadHomeAssets();
    }

    render () {
        return (
            <div className='content'>
                <Header />
                <div className='asset-container asset-container--grid'>
                    {
                        this.itemCollection.items.map(item => <HomeAsset {...item.data} />)
                    }
                </div>
            </div>
        );
    }
}

export default withStore(Home, 'assetStore');
