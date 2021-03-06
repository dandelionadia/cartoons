import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { ButtonBack } from './ButtonBack';
import { Episodes } from './Episodes';
import { Characters } from './Characters';
import './popup.scss';
import './seasons.scss';

class Popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEpisodes: false,
            activeSeason: null,
            activeSeasonTitle: 'Seasons'
        }
    }

    openEpisodes = (season) => {
        return () => {
            this.setState({
                showEpisodes: true,
                activeSeason: season,
                activeSeasonTitle: season.name
            })
        }
    }

    closeEpisodes = () => {
        this.setState({
            showEpisodes: false,
            activeSeason: null
        })
    }

    render() {
        const { data, onClose } = this.props
        const { showEpisodes, activeSeason } = this.state

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

                {showEpisodes ? (<h3>Season {this.state.activeSeasonTitle}</h3>) : (<h3>Seasons</h3>)}
                {!showEpisodes && (
                    <div className="seasons">
                        {data.seasons.map((season) => (
                            <div key={season.id} className="season" onClick={this.openEpisodes(season)}>
                                <div className="season__containerImage" >
                                    <img className="season__Image" src={season.image}></img>
                                </div>
                                <div className="season__containerTitle">
                                    <h4 className="season__title">{season.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {showEpisodes && (
                    <ButtonBack onClick={this.closeEpisodes} />
                )}
                {showEpisodes && (
                    <Episodes season={activeSeason} close={this.closeEpisodes} />
                )}
                <Characters data={data} />
            </div>
        )
        return (
            <div className="wrapper-container" onClick={onClose}>
                <div className="container" onClick={(event) => {
                    event.stopPropagation()
                }}>
                    {AboutCartoon}
                </div>
            </div>
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