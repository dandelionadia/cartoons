import React from 'react';
import PropTypes from 'prop-types';
import { Video } from './Video';

class Episodes extends React.Component {
    render() {
        return (
            <div className="episodes">
                {this.props.season.episodes.map((episode) => (
                    <div key={episode.id}>
                        <div className="episodes__containerVideo">
                            <Video episode={episode.videoUrl} />
                        </div>
                        <h4 className="episodes__videoTitle">{episode.name}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export { Episodes };