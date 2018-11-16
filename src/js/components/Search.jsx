import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { FaSearch, FaTimes } from 'react-icons/fa';
import Icon from 'js/components/Icon';
import { withStore } from 'js/store/Store';

class Search extends Component {

    inputRef = React.createRef();

    get inputVal () { 
        return this.inputRef.current.value;
    }

    clearInput = () => {
        this.inputRef.current.value = '';
        this.props.history.push('/');
    }

    onKeyPress = (e) => {
        e.key === 'Enter' &&  this.search();
    }

    search = () => {
        if (this.inputVal) {
            this.props.history.push(`/search/${this.inputVal}`)
        }  
    }

    render() {
        return (
            <div className={`search ${this.props.cssClass ? this.props.cssClass : ''}`}>
                <div className='search__input-wrap'>
                    <input
                        ref={ this.inputRef }
                        className='search__input'
                        onKeyPress = { this.onKeyPress }
                        defaultValue={ this.props.query || '' } />

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

export default withStore(withRouter(Search), 'assetStore');