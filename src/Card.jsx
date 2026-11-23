import './Card.css'
export default function Card({ id, image, name, onCardClick }) {

    return (
        <button className='card' onClick={() => onCardClick(id)}>
            <img src={image} alt={`Card ${name}`} />
            <p>{name}</p>
        </button>
    )
}