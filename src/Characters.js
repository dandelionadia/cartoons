import React from 'react';

class Characters extends React.Component {
    render() {

        return (
            <div>
                <h3>Characters</h3>
                <div className="characters">
                    {this.props.data.characters.map((character) => (
                        <div>
                            <img src={character.img} alt="image" />
                            <p>{character.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export { Characters };
