/* eslint-disable react/prop-types */

export const ListOfMovies = ({ movies }) => {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title} </h3>
                        <p>{movie.year} </p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))
            }

        </ul>
    )
}
