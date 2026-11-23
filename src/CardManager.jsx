import Card from './Card.jsx'
import './CardManager.css'
export default function CardManager({ cards, onCardClick }) {

    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card key={card.id} id={card.id} image={card.image}
                    name={card.name} onCardClick={onCardClick} />
            ))}
        </div>
    )
}