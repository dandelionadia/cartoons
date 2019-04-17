import React from 'react';
import { Button } from './Button';
import { Video } from './Video';
import './popup.scss';

class Popup extends React.Component {
    render() {
        const data = this.props.data
        const { onClose } = this.props
        const AboutCartoon = (
            <div className="wrapper">
                <div className="infomation">
                    <img className="image" src={data.img} />
                    <div className="content">
                        <h2>{data.content.title}</h2>
                        <div className="content__text">
                            {data.content.description}
                        </div>
                    </div>
                    <Button onClick={onClose} />
                </div>

                <h3>Episodes</h3>
                <div className="episodes">
                    {data.episodes.map((episode) => (
                        <div>
                            <div className="episodes__containerVideo">
                                <Video episode={episode.videoUrl} />
                            </div>
                            <h4 className="episodes__videoTitle">{episode.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        )
        return (
            <div className="container">{AboutCartoon}</div>
        )
    }
}

export { Popup };