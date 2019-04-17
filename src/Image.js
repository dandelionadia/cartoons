import React, { Component } from 'react';

const Image = ({ src }) => {
    return <img className="cardsList__img" src={src} alt="img" />
}

// Image.propTypes = {
//     src: PropTypes.string.isRequired,
// }

export { Image };