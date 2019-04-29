import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
    return (
        <iframe title="video" className="video" src={props.episode} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

Video.propTypes = {
    episode: PropTypes.string.isRequired,
}

export { Video };