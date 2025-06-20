import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {favorites} = useMovieContext()

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="favorites-empty">
                <h1>No favorite movies yet.</h1>
                <p>Add a movie to your favorites and it will appear here!</p>
            </div>
        )
    }


}

export default Favorites