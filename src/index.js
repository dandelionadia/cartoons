import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup'
import { CardsList } from './CardsList';
import './index.css';
import cartoons from './cartoons.json'

class App extends React.Component {
    state = {
        showPopup: false,
        activeCartoon: null
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
