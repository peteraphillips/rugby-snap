import './App.css'
import { useState } from 'react'

import cardService from './services/cards'

import Collection from './components/collection'
import Lobby from './components/lobby'


function App() {

  const [cards, setCards] = useState([])

  const handleClickCollection = (event) => {
    event.preventDefault()
  
    cardService
    .getAll()
    .then(initialCards => {
        setCards(initialCards)
    })
  
  }

  const handleClickPlay = (event) => {
    event.preventDefault()

    setCards([])
  }

  return (
    <main>
      <nav className="navbar">
        <ul>
          <li><a href="#" onClick={handleClickPlay}>Play</a></li>
          <li><a href="#" onClick={handleClickCollection}>Collection</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <Collection cards={cards} />
      <Lobby />
    </main>
  )
}

export default App
