import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import Bg from './assets/bg.jpg'
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState(
        {
            name: 'Dark',
            backdrop_path: Bg,
            overview: 'Dark is an horror adventure Genre movie. A boy finds out his parents are alcoholics and decides to escape home. His parents find out and assaults him.'
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*requests.data.results.length - 1)]);
        }
        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }
    return (
        <header className="banner" style={
            {
                backgroundSize: "cover",
                // backgroundImage: url(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`),
                backgroundImage: `url(${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }
        }>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{ truncate(movie?.overview, 150) }</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
