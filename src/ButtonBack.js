import React from 'react';

function ButtonBack(props) {
    return (
        <div>
            <button className="buttonBack" onClick={props.onClick} >Back</button>
        </div>
    )
}

export { ButtonBack }