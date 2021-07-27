import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import Img from './assets/robin.png'
import Img2 from './assets/tobby.png'
import Youtube from './Youtube'
// import Youtube from'react-youtube'
// import movieTrailer from 'movie-trailer'
import videoUrl from './assets/trailer.mp4'

// const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Sexify',
            trailer: videoUrl
        },
        {
            id: 2,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Sex/Life',
            trailer: videoUrl
        },
        {
            id: 3,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Games of Throne',
            trailer: videoUrl
        },
        {
            id: 4,
            poster_path: Img,
            poster_path2: Img2,
            name: 'RiverDale',
            trailer: videoUrl
        },
        {
            id: 5,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Boss Lady',
            trailer: videoUrl
        },
        {
            id: 6,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Seven Deadly Sins',
            trailer: videoUrl
        },
        {
            id: 7,
            poster_path: Img,
            poster_path2: Img2,
            name: '365Days',
            trailer: videoUrl
        },
        {
            id: 8,
            poster_path: Img,
            poster_path2: Img2,
            name: 'The Dictator',
            trailer: videoUrl
        },
        {
            id: 9,
            poster_path: Img,
            poster_path2: Img2,
            name: 'DaisyMoms',
            trailer: videoUrl
        },
        {
            id: 10,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Single',
            trailer: videoUrl
        },
        {
            id: 11,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Boss Baby',
            trailer: videoUrl
        },
        {
            id: 12,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Like a Boss',
            trailer: videoUrl
        },
        {
            id: 13,
            poster_path: Img,
            poster_path2: Img2,
            name: 'PartyNight',
            trailer: videoUrl
        },
        {
            id: 14,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Outrage',
            trailer: videoUrl
        },
        {
            id: 15,
            poster_path: Img,
            poster_path2: Img2,
            name: 'THUGLIFE',
            trailer: videoUrl
        },
        {
            id: 16,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Tom and Jerry',
            trailer: videoUrl
        },
        {
            id: 17,
            poster_path: Img,
            poster_path2: Img2,
            name: 'HamburgerRun',
            trailer: videoUrl
        },
        {
            id: 18,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Luccifer',
            trailer: videoUrl
        },
        {
            id: 19,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Outlander',
            trailer: videoUrl
        },
        {
            id: 20,
            poster_path: Img,
            poster_path2: Img2,
            name: 'Merlin',
            trailer: videoUrl
        },
    ])
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
            //https://developers.google.com/youtube/player_parameters,
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else{
            // movieTrailer(movie?.name || "")
            // .then(url => {
            //     const urlParams = new URLSearchParams(new URL(url).search)
            //     setTrailerUrl(urlParams.get('v'))
            // }).catch(error => console.log(error))
            setTrailerUrl(movie.trailer)
        }
    }
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row_posters">
                {movies.map(movie => (
                    // <img src={`${base_url}${movie.poster_path}`} alt={movie.name} className="row_poster" />
                    <img key={movie.id} src={`${isLargeRow ? movie.poster_path : movie.poster_path2}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarger"}`} onClick={() => handleClick(movie)} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
