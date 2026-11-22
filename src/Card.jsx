export default function Card({ id, image, name }) {

    return (
        <div>
            <img src={image} alt={`Card ${id}`} />
            <p>{name}</p>
        </div>
    )
}