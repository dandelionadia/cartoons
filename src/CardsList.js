import React, { Component } from 'react';
import { Image } from './Image';
import './cardsList.scss';

class CardsList extends React.Component {
    render() {
        const { onItemClick } = this.props
        return (
            <div className="box">
                {this.props.data.map((item) => {
                    return (
                        <div className="cardsList" key={item.id} onClick={onItemClick}>
                            <Image className="cardsList__img" src={item.img} />
                            <div className="cardsList__text">{item.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export { CardsList };