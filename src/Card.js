import React from 'react';
import './card.css'

function Card(props) {
    const {name,type} = props

    return (
        <li className="card">
           <p className="card__name">{name}</p> 
           <p className="card__type">{type}</p> 
        </li>
    )
}

export default Card