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

        this.state = {
            loading: true
        }
    }

    componentDidMount () {
        this.loadAssets();
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params.q !== prevProps.match.params.q) {
            this.loadAssets()
        }
    }

    loadAssets () {
        this.setState({ loading: true });

        this.props.assetStore
            .search(this.props.match.params.q)
            .then(() => this.setState({ loading: false }));
    }

    render () {
        return (
            <div className='content'>
                <Header />
                <div className='asset-container asset-container--grid'>
                    {
                        this.state.loading 
                            ? <div>Loading results for { this.props.match.params.q }... </div>
                            : this.itemCollection.items.map((item, idx) =>
                                <HomeAsset
                                    key={idx}
                                    isSelected={item.isSelected}
                                    onClick={ () => this.itemCollection.select(item.data.id) }
                                    data={item.data}
                                />)
                    }
                </div>
            </div>
        );
    }
}

export default withStore(Home, 'assetStore');
