export default function Movie({ title, rating, studio }) {
    return (
        <li>
            <h4>{title}</h4>
            <p>{rating}</p>
            <p>{studio}</p>
        </li>
    );
}

