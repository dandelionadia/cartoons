import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './card.css';
import * as serviceWorker from './serviceWorker';

const arr = [
    {
        id: 1,
        name: 'Adventure Time',
        type: 'adventure'
    },
    {
        id: 2,
        name: 'Avatar. The Legend of Aang',
        type: 'history'
    }
]

class Cards extends React.Component {
    render() {
        const card = this.props.data.map(function(item) {
            return (
                <div className="card" key={item.id}>
                    <p className="card__name">{item.name}</p>
                    <p className="card__Type">{item.type}</p>
                </div>
            )
        })
        return (
            <div>{card}</div>
        )
    }
}

const App = () => {
    return (
        <div>
            <Cards data={arr} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
