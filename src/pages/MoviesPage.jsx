import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MoviesPage() {
  const location = useLocation();
  const [allMovies, setAllMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function getMovies() {
      const todayMovies = location.state?.movies || [];
      setAllMovies(todayMovies);
    }

    getMovies();
  }, [location.state]);

  function SeeViewsClick(movie) {
    console.log(movie);
    navigate("/movie/detail", { state: { movie } });
  }

  return (
    <div className="w-full h-full bg-slate-950">
      <header className="h-16 bg-slate-900 flex items-center gap-14 py-2.5 px-6 shadow-xl">
        <h1 className="text-2xl text-slate-50 font-bold">MoviesFlix</h1>
        <Navbar />
      </header>
      <div className="w-full py-5 px-8 flex gap-6 flex-wrap">
        {Array.isArray(allMovies) && allMovies.length > 0 ? (
          allMovies.map((movie) => (
            <div key={movie.id} className="card h-[399px] w-[247px]">
              <div className="image h-[100%] w-full relative group">
                <div
                  onClick={() => {
                    SeeViewsClick(movie);
                  }}
                  className="box absolute top-0 left-0 right-0 bottom-0 cursor-pointer group-hover:bg-[rgba(0,0,0,0.4)] duration-100 ease-in-out"
                ></div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover rounded-md"
                />
                <span className="title text-slate-100 text-2xl font-bold ml-1 absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {movie.title}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-[399px] flex justify-center items-center">
            <div className="animate-spin h-10 w-10 border-t-2 border-slate-200 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesPage;
