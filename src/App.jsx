import './App.css'
import Scoreboard from './Scoreboard'
import CardManager from './CardManager'


function App() {
  // Hardcode 12 cards
  const cards = [
    { id: 1, image: 'image1.jpg' },
    { id: 2, image: 'image2.jpg' },
    { id: 3, image: 'image3.jpg' },
    { id: 4, image: 'image4.jpg' },
    { id: 5, image: 'image5.jpg' },
    { id: 6, image: 'image6.jpg' },
    { id: 7, image: 'image7.jpg' },
    { id: 8, image: 'image8.jpg' },
    { id: 9, image: 'image9.jpg' },
    { id: 10, image: 'image10.jpg' },
    { id: 11, image: 'image11.jpg' },
    { id: 12, image: 'image12.jpg' }
  ];


  return (
    <>
      <Scoreboard /> 
      <CardManager cards={cards} />
    </>
  )
}

export default App
