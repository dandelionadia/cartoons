import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './card.scss';
import './aboutCartoons.css';
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
                            <h3>{item.content.title}</h3>
                            <div>{item.content.description}</div>
                        </div>
                    </div>
                    <div className="apisodes">
                        <a href={item.apisodes.href}>
                            {item.apisodes.nameApisodes}
                        </a>
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
