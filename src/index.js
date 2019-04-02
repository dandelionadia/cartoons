import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './card.scss';
import * as serviceWorker from './serviceWorker';

import cartoons from './cartoons.json'

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

const Image = ({ src }) => {
    return <img className="cardType__img" src={src} alt="img" />
}

const App = () => {
    return (
        <div>
            <CardType data={cartoons} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
