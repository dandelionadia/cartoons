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
        const cardType = this.props.data.map((item) => {
            return (
                <div className="cardType" key={item.id} onClick={this.props.onItemClick}>
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

function Video(props) {
    return (
        <iframe className="video" src={props.episode} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

function Button(props) {
    return (
        <div className="menu-btn" onClick={props.onClick}>
            <div className="menu-btn__line"></div>
            <div className="menu-btn__line"></div>
        </div>
    )
}

class AboutCartoons extends React.Component {
    render() {
        const AboutCartoons = this.props.data.map((item) => {
            return (
                <div class="wrapper">
                    <div className="infomation">
                        <img className="image" src={item.image} />
                        <div className="content">
                            <h2>{item.content.title}</h2>
                            <div className="content__text">
                                {item.content.description}
                            </div>
                        </div>
                        <Button onClick={this.props.onClose} />
                    </div>

                    <h3>Episodes</h3>
                    <div className="episodes">
                        {item.episodes.map((episode) => (
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
        })
        return (
            <div className="container">{AboutCartoons}</div>
        )
    }
}

const Image = ({ src }) => {
    return <img className="cardType__img" src={src} alt="img" />
}

class App extends React.Component {
    state = {
        showPopup: false
    }

    handleItemClick = () => {
        this.setState({
            showPopup: true
        })
    }

    handlePopupClose = () => {
        this.setState({
            showPopup: false
        })
    }

    render() {
        const { showPopup } = this.state

        return (
            <div>
                <CardType data={cartoons} onItemClick={this.handleItemClick} />
                {showPopup && (
                    <AboutCartoons data={aboutCartoons} onClose={this.handlePopupClose} />
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));

serviceWorker.unregister();
