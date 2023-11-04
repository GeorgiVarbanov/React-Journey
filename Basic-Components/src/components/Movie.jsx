export default function Movie(props){
    return (
        <article>
            <h4>Title: {props.data.title}</h4>
            <p>Rating: {props.data.rating}</p>
            <p>Studio: {props.data.studio}</p>
        </article>
    );
}

