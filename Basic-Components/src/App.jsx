import movies from './assets/movies.js'
import reactLogo from './assets/react.svg'
import MovieList from './components/MovieList.jsx'
import './App.css'

function App() {
  return (
    <>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>First Dynamic React App</h1>
        <MovieList movies={movies} headingText = "Movie List"/>
    </>
  )
}

export default App
