import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react'
import Icon from 'js/components/Icon';
import { FaThumbsUp, FaDownload, FaEye } from 'react-icons/fa';


const LikeWidget = (props) => {
    return (
        <Icon
            onClick={ props.action }
            iconComponent={ FaThumbsUp }
            cssClass='asset__widget asset__like-widget' />
    )
}

const DownloadWidget = (props) => {
    return (
        <Icon
            onClick={ props.action }
            iconComponent={ FaDownload }
            cssClass='asset__widget asset__download-widget' />
    )
}

const InfoWidget = (props) => {
    return (
        <Icon
            onClick={ props.action }
            iconComponent={ FaEye }
            cssClass='asset__widget asset__view-widget' />
    )
}

class HomeAsset extends Component {
    render() {
        return (
            <div 
                onClick={this.props.onClick}
                className={'asset asset__grid-separator' + (this.props.isSelected ? ' selected' : '')}
            >
                <div className='asset--grid'>
                    <div className='asset__thumbnail asset__thumbnail--grid' style={{
                        backgroundImage: `url('${this.props.data.thumbnail}')`
                    }}/>
                    <div className='asset__info'>
                        <div className='first'>{ this.props.data.name }</div>
                        <div className='second'>{ this.props.data.previewDate }</div>
                    </div>
                </div>

                { this.props.isSelected && <LikeWidget action={ () => {}} />}
                { this.props.isSelected && <DownloadWidget action={ this.props.data.download } />}
                { this.props.isSelected && <InfoWidget action={ this.props.openAssetInfoModal } />}
            </div>
        );
    }
}

HomeAsset.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    previewDate: PropTypes.string
};

export default observer(HomeAsset);
