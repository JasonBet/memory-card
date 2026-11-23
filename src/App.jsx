import './App.css'
import { useState, useEffect } from 'react'
import Scoreboard from './Scoreboard'
import CardManager from './CardManager'


const pokemonCards = [
  'darkrai', 'dialga', 'mew', 'arceus', 'palkia', 'rayquaza', 
  'mewtwo', 'ditto', 'dragonite', 'lucario', 'garchomp', 'gengar'
]

function shuffleCards(list) {
  const shuffledCards = [...list];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  return shuffledCards;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const responses = pokemonCards.map(async (name) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${name}`);
          }
          return response.json();
        });
        const data = await Promise.all(responses);
        const pokemonList = data.map((pokemon) => ({
          id: pokemon.id,
          image: pokemon.sprites.front_default,
          name: pokemon.name
        }));
        setCards(shuffleCards(pokemonList));
      }
      catch (error) {
        console.error('Error fetching data:', error);
        setHasError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Click Handler
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setClickedCards([]);

    } else {
      setClickedCards([...clickedCards, id]);
      setHighScore(Math.max(highScore, clickedCards.length + 1));
    }
    setCards(shuffleCards(cards));
  }



  return (
    <>
      <Scoreboard score={clickedCards.length} highScore={highScore} />
      {isLoading ? (
        <p>Loading...</p>
      ) : hasError ? (
        <p>Error loading cards. Please try again later.</p>
      ) : (
        <CardManager cards={cards} onCardClick={handleCardClick} />
      )}
    </>
  )
}

export default App
