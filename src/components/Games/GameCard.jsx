import React, {useState} from 'react'

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <img
            className="cardimg"
            src={game.image}
            alt="Card cap"
            />
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">{game.description}</p>
            </div>
        </div>    
    )
}

export default GameCard;