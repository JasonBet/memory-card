export default function Card({ id, image, name, onCardClick }) {

    return (
        <button onClick={() => onCardClick(id)}>
            <img src={image} alt={`Card ${name}`} />
            <p>{name}</p>
        </button>
    )
}