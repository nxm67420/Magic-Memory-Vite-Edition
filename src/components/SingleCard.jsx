import React from 'react'
import '../css/SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled}) {
    
  const handleClick = () => { 
    if (!disabled) { 
      handleChoice(card)
    }   
  }

  return (
    <div className='card'>
      <div className={flipped ? "flipped" : "" }>

          {/* Front of Card */}
          <img className='front'
          src={card.src}
          alt='Front of Cards' />

          {/* Back of Card */}
          <img className='back'
          onClick={handleClick}
          src="/img/cover.png"
          alt='Back of Cards' />
        
        </div>
    </div>
  )
}
