import React, { Component } from 'react';

import { withStore } from 'js/store/Store';
import Collection from 'js/store/Collection';
import HomeAsset from './HomeAsset';
import Header from '../../components/Header';
import AssetInfoModal from 'js/pages/home/AssetInfoModal';

import 'scss/pages/home.scss';


class Home extends Component {
    constructor (props) {
        super(props);
        this.itemCollection = new Collection(this.props.assetStore.assets);

        this.state = {
            loading: true,
            assetInfoModal: false
        }

        this.openAssetInfoModal = this.openAssetInfoModal.bind(this);
        this.closeAssetInfoModal = this.closeAssetInfoModal.bind(this);
    }

    componentDidMount () {
        this.loadAssets();
    }

    loadAssets () {
        this.setState({ loading: true });
        this.props.assetStore
            .loadHomeAssets()
            .then(() => this.setState({ loading: false }));
    }

    openAssetInfoModal () {
        this.setState({ assetInfoModal: true });
    }
    
    closeAssetInfoModal () {
        this.setState({ assetInfoModal: false });
    }

    render () {
        return (
            <div className='content'>
                <Header />
                
                <div className='asset-container asset-container--grid'>
                    {
                        this.state.loading 
                            ? <div>Loading all assets ... </div>
                            : this.itemCollection.items.map((item, idx) =>
                                <HomeAsset
                                    key={idx}
                                    isSelected={item.isSelected}
                                    onClick={ () => this.itemCollection.select(item.data.id) }
                                    openAssetInfoModal={ this.openAssetInfoModal }
                                    data={item.data}
                                />)
                    }
                </div>

                { this.state.assetInfoModal && 
                    <AssetInfoModal 
                        closeAssetInfoModal={ this.closeAssetInfoModal }
                        assetData={ this.itemCollection.selectedItem.data } /> 
                }
            </div>
        );
    }
}

export default withStore(Home, 'assetStore');
