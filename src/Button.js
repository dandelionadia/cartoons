import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <div className="menu-btn" onClick={props.onClick}>
            <div className="menu-btn__line"></div>
            <div className="menu-btn__line"></div>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export { Button };