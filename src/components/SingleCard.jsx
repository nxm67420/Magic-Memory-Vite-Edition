import React from 'react'
import '../css/SingleCard.css'

export default function SingleCard({ card, handleChoice}) {
    
    const handleClick = () => { 
        handleChoice(card)
    }

  return (
    <div className='card'>
        <div>
            <img className='front' src={card.src} alt='Front of Cards' />
            <img className='back' onClick={handleClick} src="/img/cover.png" alt='Back of Cards'></img>
        </div>
    </div>
  )
}
