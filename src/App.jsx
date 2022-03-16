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
  //Dynamic Values
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

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
  useEffect(() => { 
    if (choiceOne && choiceTwo) { 
      if (choiceOne.src === choiceTwo.src) {
        console.log("MATCH FOUND")
        resetTurn();
      }
      else { 
        console.log("Not Match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo])

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

    </div>
  );//end of Return 
}//End of Fucntion App

export default App
