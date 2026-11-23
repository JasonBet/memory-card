import Card from './Card.jsx'
export default function CardManager({ cards, onCardClick }) {

    return (
        <>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} image={card.image} 
                    name={card.name} onCardClick={onCardClick}/>
            ))}
        </>
    )
}