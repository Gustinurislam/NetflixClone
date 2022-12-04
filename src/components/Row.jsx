import axios from '../../axios';
import React, { useEffect, useState } from 'react';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ml-6 font-semibold mt-2">
      <h2 >{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scroll_bar ease-in-out">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`rounded-md max-h-[100px] object-contain mr-[20px] duration-500 ease-in-out hover:scale-110  opacity-[1] cursor-zoom-in ${
                  isLargeRow && 'max-h-60'
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Row;
