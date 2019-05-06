import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Video } from './Video';
import './popup.scss';
import './seasons.scss';

class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEpisodes: false,
            showSeasons: true
        }
    }
    render() {
        const { data, onClose } = this.props
        const AboutCartoon = (
            <div className="wrapper">
                <div className="infomation">
                    <img className="image" src={data.img} alt={data.content.title} />
                    <div className="content">
                        <h2>{data.content.title}</h2>
                        <div className="content__text">
                            {data.content.description}
                        </div>
                    </div>
                    <Button onClick={onClose} />
                </div>

                <h3>Seasons</h3>
                <div className="seasons">
                    {data.seasons.map((season) => (
                        <div key={season.id} className="season">
                            <div className="season__containerImage">
                                <img className="season__Image" src={season.image}></img>
                            </div>
                            <div className="season__containerTitle">
                                <h4 className="season__title">{season.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="episodes">
                    {data.episodes.map((episode) => (
                        <div key={episode.id}>
                            <div className="episodes__containerVideo">
                                <Video episode={episode.videoUrl} />
                            </div>
                            <h4 className="episodes__videoTitle">{episode.name}</h4>
                        </div>
                    ))}
                </div> */}
            </div>
        )
        return (
            <div className="container">{AboutCartoon}</div>
        )
    }
}

// Popup.propTypes = {
//     data: PropTypes.shape({
//         content: PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired
//         }),
//         episodes: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             videoUrl: PropTypes.string.isRequired
//         })),
//         img: PropTypes.string.isRequired
//     }),
//     onClose: PropTypes.func
// }

export { Popup };