import React from 'react'

export default function GameCard ({ game }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={ game.cover } alt="Game cover"/>
      </div>
      <div className="content">
        <div className="header">
          { game.title }
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: React.PropTypes.object.isRequired
}