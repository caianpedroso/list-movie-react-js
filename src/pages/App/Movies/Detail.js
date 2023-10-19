import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function DetailMovie() {
  const {id } = useParams();
  const [movies, setMovies ] = useState([]);
  
  const imagePath = "https://image.tmdb.org/t/p/original";
  async function logMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=165f85727237cb7772aa708c6b8bbb5e`);
    const movies = await response.json();
    setMovies(movies);
  }
  
  useEffect(() => {
    logMovies()
  }, [])
  console.log("movies ssss ", movies)
  return(
    <div>
      <h1 className="text-2xl">{movies?.title}</h1>
      <h2 className="text-lg">{movies?.release_date}</h2>
      <h2>Runtime: {movies?.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{movies?.status}</h2>
      <img
        className="my-12 w-full"
        src={imagePath + movies?.backdrop_path}
        width={800}
        height={800}
        alt={movies?.title}
        priority
      />
      <p>{movies?.overview}</p>
    </div>
  )
}