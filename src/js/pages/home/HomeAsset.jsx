import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react'
import Icon from 'js/components/Icon';
import { FaThumbsUp, FaDownload } from 'react-icons/fa';


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
                        <div className='second'>{ this.props.data.author }</div>
                    </div>
                </div>

                { this.props.isSelected && <LikeWidget action={ () => {}} />}
                { this.props.isSelected && <DownloadWidget action={ () => {}} />}
            </div>
        );
    }
}

HomeAsset.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    author: PropTypes.string
};

export default observer(HomeAsset);
