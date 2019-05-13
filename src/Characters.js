import React from 'react';
import './characters.scss';

class Characters extends React.Component {
    render() {
        return (
            <div>
                <h3>Characters</h3>
                <div className="characters">
                    {this.props.data.characters.map((character) => (
                        <div className="character">
                            <img className="characters__img" src={character.img} alt="image" />
                            <p><span className="characters__name">Name:</span>{character.name}</p>
                            <p><span className="characters__name">What does he likes:</span>{character.color}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export { Characters };
