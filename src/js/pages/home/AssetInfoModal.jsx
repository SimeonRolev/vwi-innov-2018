import React, { Component } from 'react';

import Modal from 'js/components/Modal';

const renderAssetInfo = (props) => {
    const assetData = props.assetData;

    return (
        <div className='meta-info'>
            <div className='meta-info__asset'>
                <img className='meta-info__thumb' src={ assetData.thumbnail } alt='Missing thumbnail' />
                <div className='meta-info__name'>{ assetData.name }</div>
                <div className='meta-info__date'>{ assetData.previewDate }</div>
                <a className='meta-info__link' href={ assetData.link }>Download</a>
            </div>

            <div className='meta-info__data'>Metadata ...</div>
        </div>
    )
}

class AssetInfoModal extends Component {
    render () {
        return (
            <Modal
                onClose={ this.props.closeAssetInfoModal }
                content={ renderAssetInfo(this.props) } />
        );
    }
}

export default AssetInfoModal;
