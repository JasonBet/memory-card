export default function Card({ id, image, name, onCardClick }) {

    return (
        <div onClick={() => onCardClick(id)}>
            <img src={image} alt={`Card ${id}`} />
            <p>{name}</p>
        </div>
    )
}