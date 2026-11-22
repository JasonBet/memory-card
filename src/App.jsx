import './App.css'
import Scoreboard from './Scoreboard'
import CardManager from './CardManager'


function App() {
  // Hardcode 12 cards
  const cards = [
    { id: 1, image: 'image1.jpg', name: 'Card 1' },
    { id: 2, image: 'image2.jpg', name: 'Card 2' },
    { id: 3, image: 'image3.jpg', name: 'Card 3' },
    { id: 4, image: 'image4.jpg', name: 'Card 4' },
    { id: 5, image: 'image5.jpg', name: 'Card 5' },
    { id: 6, image: 'image6.jpg', name: 'Card 6' },
    { id: 7, image: 'image7.jpg', name: 'Card 7' },
    { id: 8, image: 'image8.jpg', name: 'Card 8' },
    { id: 9, image: 'image9.jpg', name: 'Card 9' },
    { id: 10, image: 'image10.jpg', name: 'Card 10' },
    { id: 11, image: 'image11.jpg', name: 'Card 11' },
    { id: 12, image: 'image12.jpg', name: 'Card 12' }
  ];

  const clickedCards = [];




  return (
    <>
      <Scoreboard score={clickedCards.length} highScore={0} /> 
      <CardManager cards={cards} />
    </>
  )
}

export default App
