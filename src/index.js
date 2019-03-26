import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './card.scss';
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

const arrType = [
    {
        id: 1,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'Text name',
    },
    {
        id: 2,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'text',
    },
    {
        id: 3,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'Text name',
    },
    {
        id: 4,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'text',
    },
    {
        id: 5,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'Text name',
    },
    {
        id: 6,
        img: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400',
        text: 'text',
    },
]

class Cards extends React.Component {
    render() {
        const card = this.props.data.map(function(item) {
            return (
                <div className="card" key={item.id}>
                    <div>
                        <Image/>
                    </div>
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

class CardType extends React.Component {
    render() {
        const cardType = this.props.data.map(function(item) {
            return (
                <div className="cardType" key={item.id}>
                    <Image className="cardType__img" src={arrType.src}/>
                    <div className="cardType__text">{item.text}</div>
                </div>
            )
        })
        return (
            <div className="box">{cardType}</div>
        )
    }
}

const srcElement = {
    src: {
        a: "https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
        b: "https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400"
    }
}

const Image = () => {
    return <img className="card__img cardType__img" src={srcElement.src.b} alt="img"></img>
}

const App = () => {
    return (
        <div>
            <div>
                <CardType data={arrType} />
            </div>
            <div>
                <h1 className="title">Cartoons</h1>
                <Cards data={arr} />
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
