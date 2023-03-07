import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({movieId, coverImg, title, summary, genres}) {
    return <div key={movieId}>
        <img src={coverImg} alt="movie cover image" />
        <h2>
            <Link to={`/movie/${movieId}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
        {genres.map((g, idx) => <li key={idx}>{g}</li>)}
        </ul>
    </div>;
}

Movie.propTypes = {
    movieId: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    genres: PropTypes.array.isRequired, 
}

export default Movie;