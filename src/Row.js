import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import Img from './assets/robin.png'
import Img2 from './assets/tobby.png'
import Youtube from'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters,
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarger"}`} onClick={() => handleClick(movie)} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
