import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
    const [movies, setmovies] = useState([])



    const getMovies = async () => {
       const newMovies = await searchMovies({search})
        setmovies(newMovies)

        }

    return {
        movies,
        getMovies
    }
}