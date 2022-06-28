import React from "react";
import { useEffect } from "react";
import './app.css';
import SearchIcon from './search.svg'

// f322322d

const API_URL = 'https://www.omdbapi.com?apikey=f322322d'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers')
    }, [])

    return (
        <div className='app'>
            <h1>Your Movie Library</h1>

            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value='Avengers'
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;