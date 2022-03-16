import { useState, useEffect } from 'react/cjs/react.development'
import './App.css'
import SingleCard from './components/SingleCard'

//Outside of Function App
//Because These Will Not Change
const cardImages = [
  { "src": "/img/helmet-1.png", matched:false },
  { "src": "/img/potion-1.png", matched:false },
  { "src": "/img/ring-1.png", matched:false },
  { "src": "/img/scroll-1.png", matched:false },
  { "src": "/img/shield-1.png", matched:false },
  {"src": "/img/sword-1.png", matched:false}
]

function App() {
  //Dynamic Values That Will Change 
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //User Choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cardImages
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card, id: Math.random()
      }))
    //Create Card Deck 
    setCards(shuffledCards);
    setTurns(0)
  }

  //Handle a Card Choice
  const handleChoice = (card) => {
    //If ChoiceOne has Value --> Set choiceTwo
    //Else setChoiceOne --> Value 
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //Reset Choice and Increase Turn Count
  //If Match is Found
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  //Compare 2 selected Cards
  //Function only runs after we make two choices 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      resetTurn()
    }
  }
}, [choiceOne, choiceTwo])

  console.log(cards);
  
  //Returned JSP
  return (
    <div className="App">
      {/* Title */}
      <h1>Magic Match</h1>

      {/* Starts New Game */}
      <button onClick={shuffleCards}>New Game</button>

      {/* Display of Cards */}
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>

      {/* Turn Count */}
      <p> Turns : {turns }</p>
    </div>
  );//end of Return 
}//End of Fucntion App

export default App
