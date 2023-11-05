import Movie from "./Movie.jsx";

export default function MovieList(props) {
    const movies = props.movies;

    return (
        <div>
            <h2>{props.headingText}</h2>
            <ul>
                {movies.map((movie, i) => (
                    <Movie
                        key={i}
                        title = {movie.title}
                        rating = {movie.rating}
                        studio = {movie.studio}
                    />
                ))}

            </ul>
        </div>
    );
}