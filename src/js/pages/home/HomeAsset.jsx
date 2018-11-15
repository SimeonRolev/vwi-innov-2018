import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeAsset extends Component {
    render() {
        return (
            <div className='asset asset__grid-separator'>
                <div className='asset--grid'>
                    <div className='asset__thumbnail asset__thumbnail--grid' style={{
                        backgroundImage: `url('${this.props.thumbnail}')`
                    }}/>
                    <div className='asset__info'>
                        <div className='first'>{ this.props.name }</div>
                        <div className='second'>{ this.props.author }</div>
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

export default HomeAsset;
