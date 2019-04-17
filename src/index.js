import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Popup } from './Popup'
import { CardsList } from './CardsList';
import './index.css';
import cartoons from './cartoons.json'

class App extends React.Component {
    state = {
        showPopup: false,
        activeCartoon: cartoons[0]
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
        const { showPopup, activeCartoon } = this.state

        return (
            <div>
                <CardsList data={cartoons} onItemClick={this.handleItemClick} />
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
