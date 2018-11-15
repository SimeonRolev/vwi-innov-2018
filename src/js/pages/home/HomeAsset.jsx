import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react'

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
