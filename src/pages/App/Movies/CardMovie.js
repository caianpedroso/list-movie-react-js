import React from "react";
import {useNavigate} from "react-router-dom";

export default function CardMovie({ title, id, poster_path, release_date }) {
  const navigate = useNavigate();
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div onClick={() => navigate(`/movie/${id}`)} className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8" >
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={imagePath + poster_path} alt={title}/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0"></span>
              Data de Lançamento
            </h3>
            <p className="mt-1 text-sm text-gray-500">{title}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{release_date}</p>
        </div>
      </div>
    </div>
  );
}