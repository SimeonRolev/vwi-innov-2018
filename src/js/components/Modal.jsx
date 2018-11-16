import React, { Component } from 'react';

import { FaTimes } from 'react-icons/fa';
import Icon from 'js/components/Icon';

class Modal extends Component {
    onClose = () => {
        this.props.onClose && this.props.onClose();
    }

    render () {
        return (
            <div className="modal__layover" onClick={ this.onClose }>
                <div className="modal__layover__content">
                    { this.props.content }
                    <Icon
                        onClick={ this.onClose }
                        iconComponent={ FaTimes }
                        cssClass='icon-close icon-32 hover-icon' />
                </div>

            </div>
        );
    }
}

export default Modal;