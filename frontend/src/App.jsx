import './App.css'
import { useState } from 'react'

import cardService from './services/cards'
import playerService from './services/players'

import Collection from './components/collection'
import Lobby from './components/lobby'


function App() {

  const [cards, setCards] = useState([])
  const [players, setPlayers] = useState([])

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

    playerService
    .getAll()
    .then(initialPlayers => {
      setPlayers(initialPlayers)
    })

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
      <Lobby players={players} />
    </main>
  )
}

export default App
