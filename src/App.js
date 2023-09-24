//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//a8dcdc22
const API_URL = 'https://www.omdbapi.com?apikey=a8dcdc22'

// const movie = {
// "Title": "Italian Spiderman",
// "Type":"movie",
// "Year": "2007",
// "Poster" : "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// imdbID
// : 
// "tt2705436"
//}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState ('');

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
  }

  useEffect (() =>{
    searchMovies('Spiderman');
  }, []);

  return (
    <div className = "app">
      <h1> Filmphobia </h1>

      <div className = "search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={ (e) => setSearchTerm(e.target.value) }
        />
        <img
        src= {SearchIcon}
        alt= "Search"
        onClick={() => searchMovies(searchTerm)}
        />
        </div>

        {
          movies?.length >0
          ? (
            <div className= "container">
              {
                movies.map((movie) =>(
                  <MovieCard movie={movie}/>
                ))
              }
            </div>
          ) :
          (
            <div className='empty'>
              <h2>No Movies found</h2>
            </div>
          )
        }

      </div>
  );
}

export default App;
