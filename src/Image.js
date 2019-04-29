import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src }) => {
    return <img className="cardsList__img" src={src} alt="img" />
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
}

export { Image };