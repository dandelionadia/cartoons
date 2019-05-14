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
                            <div>
                                <p><span className="characters__name">Name:</span>{character.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export { Characters };
