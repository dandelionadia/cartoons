import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './card.scss';
import './aboutCartoons.scss';
import * as serviceWorker from './serviceWorker';

import cartoons from './cartoons.json'
import aboutCartoons from './aboutCartoons.json'

class CardType extends React.Component {
    render() {
        const cardType = this.props.data.map(function (item) {
            return (
                <div className="cardType" key={item.id}>
                    <Image className="cardType__img" src={item.img} />
                    <div className="cardType__text">{item.text}</div>
                </div>
            )
        })

        return (
            <div className="box">{cardType}</div>
        )
    }
}

class AboutCartoons extends React.Component {
    render() {
        const AboutCartoons = this.props.data.map(function (item) {
            return (
                <div class="wrapper">
                    <div className="infomation">
                        <img className="image" src={item.image} />
                        <div className="content">
                            <h2>{item.content.title}</h2>
                            <div className="text">{item.content.description}</div>
                        </div>
                        <div className="menu-btn">
                            <div className="menu-btn__line"></div>
                            <div className="menu-btn__line"></div>
                        </div>
                    </div>

                    <h2>Episodes</h2>
                    <div className="episodes">
                        {item.episodes.map((episode) => (
                            <div className="episodes__containerVideo">
                                <iframe src={episode.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <h3>{episode.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )
        })
        return (
            <div className="container">{AboutCartoons}</div>
        )
    }
}

const Image = ({ src }) => {
    return <img className="cardType__img" src={src} alt="img" />
}

const App = () => {
    return (
        <div>
            <CardType data={cartoons} />
            <AboutCartoons data={aboutCartoons} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));

serviceWorker.unregister();
