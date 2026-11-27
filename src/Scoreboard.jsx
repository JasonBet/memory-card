import './Scoreboard.css'
export default function Scoreboard({ score, highScore }) {

    return (
        <>
            <h1>Memory Card Game</h1>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </>
    )
}