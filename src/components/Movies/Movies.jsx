/* eslint-disable react/prop-types */
import { ListOfMovies } from './ListOfMovies'

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0

    return (
        <>
            {
                hasMovies
                    ? (

                        <ListOfMovies movies={movies} />
                    ) : (
                        <NoMoviesResults />
                    )
            }
        </>
    )
}

const NoMoviesResults = () => {
    return <p> No Movies Results</p>
}
