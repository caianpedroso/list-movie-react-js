import React, {useEffect, useState} from "react";
import CardMovie from "./CardMovie";

export function MoviesList() {
  const [movies, setMovies ] = useState([])
  async function logMovies() {
    // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=165f85727237cb7772aa708c6b8bbb5e`);
    const movies = await response.json();
    setMovies(movies);
  }
  
  useEffect(() => {
    logMovies()
  }, [])
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de filmes</h2>
        {movies?.results?.map(movie => (
          <CardMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}