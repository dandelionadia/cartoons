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
    },
    {
        id: 3,
        name: ' Aang',
        type: 'history'
    }
]

class Cards extends React.Component {
    render() {
        const card = this.props.data.map(function(item) {
            return (
                <div className="card" key={item.id}>
                    <img className="card__img" src="https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="img"></img>
                    <div className="card__box-info">
                        <p className="card__name">{item.name}</p>
                        <p className="card__type">{item.type}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="box">{card}</div>
        )
    }
}

const App = () => {
    return (
        <div>
            <h1 className="title">Cartoons</h1>
            <Cards data={arr} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
