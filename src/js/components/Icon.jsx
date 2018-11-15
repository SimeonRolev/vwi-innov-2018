import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";

class Icon extends Component {
    onClick = () => {
        this.props.onClick && this.props.onClick();
    }

    render () {
        return (
            <div
                onClick={ this.onClick } 
                className={ `icon ${this.props.cssClass ? this.props.cssClass : ''}` }
            >
                <IconContext.Provider value={this.props.svgProps ? this.props.svgProps : {}}>
                        <this.props.iconComponent />
                </IconContext.Provider>
            </div>
        );
    }
}

Icon.propTypes = {
    cssClass: PropTypes.string,
    svgProps: PropTypes.object
};

export default Icon;