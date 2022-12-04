import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="bg-cover bg-center h-[448px]  text-white object-contain overflow-hidden"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
     {/* gradient black */}
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-[2rem] font-bold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-[0.2vw] px-6 mr-4 pt-2 bg-stone-900/50 pb-2 hover:bg-white hover:text-black hover: transition-all duration-[0.2s] md:px-8 lg:px-15">
            Play
          </button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-[0.2vw] px-6 mr-4 pt-2 bg-stone-900/50 pb-2 hover:bg-white/70 hover:text-black hover: transition-all duration-[0.2s] md:px-8 lg:px-15">
            My List
          </button>
        </div>
        <h1 className="w-[80%] leading-[1.2] pt-4 text-md h-20 font-semibold md:text-xl lg:text-2xl">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="h-[7.4rem] mt-[9rem] bg-gradient-to-t from-black to-transparent  " />
    </header>
  );
}

export default Banner;
