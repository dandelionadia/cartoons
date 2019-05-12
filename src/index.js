import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup'
import { CardsList } from './CardsList';
import './index.css';

class App extends React.Component {
    state = {
        showPopup: false,
        activeCartoon: null,
        data: null
    }

    componentDidMount() {
        // get data from backend
        fetch('http://localhost:3004/cartoons').then((response) => {
            // change data format to json
            return response.json()
        }).then((data) => {
            // change state
            this.setState({
                data: data
            })
        })
    }

    handleItemClick = (singleCartoon) => {
        return () => {
            this.setState({
                showPopup: true,
                activeCartoon: singleCartoon
            })
        }
    }

    handlePopupClose = () => {
        this.setState({
            showPopup: false
        })
    }

    render() {
        const { data, showPopup, activeCartoon } = this.state
        // if we do not have data we show 'Loading'
        if (data === null) {
            return (
                <p>Loading</p>
            )
        }

        return (
            <div>
                <div className="box-h1">
                    <h1>* Cartoons *</h1>
                </div>
                <CardsList data={data} onItemClick={this.handleItemClick} />
                {showPopup && (
                    <Popup data={activeCartoon} onClose={this.handlePopupClose} />
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
