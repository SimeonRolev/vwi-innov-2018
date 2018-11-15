import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FaSearch, FaTimes } from 'react-icons/fa';
import Icon from 'js/components/Icon';

class Search extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputString: ''
        }
    }

    clearInput = () => {
        this.setState({ inputString: '' });
    }

    onInput = (e) => {
        this.setState({ inputString: e.target.value });
    }

    search = () => {
        
    }

    render() {
        return (
            <div className={`search ${this.props.cssClass ? this.props.cssClass : ''}`}>
                <div className='search__input-wrap'>
                    <input 
                        className='search__input'
                        onChange={ this.onInput }
                        value={this.state.inputString} />
                    
                    <Icon
                        onClick={ this.clearInput }
                        iconComponent={ FaTimes }
                        cssClass='icon-close hover-icon' />
                </div>

                <Icon 
                    onClick={ this.search }
                    iconComponent={ FaSearch }
                    cssClass='hover-icon icon-32' />
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;
