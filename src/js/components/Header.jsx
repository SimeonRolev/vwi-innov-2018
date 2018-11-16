import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Search from './Search';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Search 
                    cssClass='header__search'
                    query={ this.props.match.params.q || '' } />
            </div>
        );
    }
}

export default withRouter(Header);
