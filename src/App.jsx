import './App.css'

import { Movies } from './components/Movies/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const {search, updateSearch, error} = useSearch()
  const {  movies, getMovies } = useMovies({search})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    getMovies()

  }

  const handelChange = (e) => {

    updateSearch(e.target.value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Prueba tecnica</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{ borderColor: error ? 'red' : 'transparent'}}
            type="text"
            placeholder='Avengers, Star Wars, The Matrix...'
            onChange={handelChange}
            value={search}
          />
          <button type='submit'>Buscar</button>
        </form>
        { error && <p style={{ color:'red' }}>{error} </p> }
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
