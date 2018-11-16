import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Icon from 'js/components/Icon';
import { FaList } from 'react-icons/fa'; 
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Search 
                    cssClass='header__search'
                    query={ this.props.match.params.q || '' } />

                <div className='header__tools'>
                    <Icon 
                        onClick={ this.props.toggleListGrid }
                        iconComponent={ FaList }
                        cssClass='hover-icon icon-32' />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
