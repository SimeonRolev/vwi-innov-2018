import React, { Component } from 'react';

import { withStore } from 'js/store/Store';
import HomeAsset from './HomeAsset';
import Header from '../../components/Header';

import 'scss/pages/home.scss';


class Home extends Component {
    componentDidMount () {
        this.props.assetStore.getHomeAssets();
    }

    render () {
        return (
            <div className='content'>
                <Header />
                <div className='asset-container asset-container--grid'>
                    {
                        this.props.assetStore.assets
                            .map(asset => <HomeAsset {...asset} />)
                    }
                </div>
            </div>
        );
    }
}

export default withStore(Home, 'assetStore');
