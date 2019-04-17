import React, { Component } from 'react';

function Button(props) {
    return (
        <div className="menu-btn" onClick={props.onClick}>
            <div className="menu-btn__line"></div>
            <div className="menu-btn__line"></div>
        </div>
    )
}

export { Button };