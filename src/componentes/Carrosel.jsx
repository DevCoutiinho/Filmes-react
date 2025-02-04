import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Carrosel(props) {
  const carossel = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.category && props.category.length > 0) {
      setLoading(false);
    }
  }, [props.category]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carossel.current.scrollLeft -= carossel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carossel.current.scrollLeft += carossel.current.offsetWidth;
  };

  function SeeViewsClick(movie) {
    console.log(movie);
    navigate("/movie/detail", { state: { movie } });
  }

  return (
    <div className=" w-screen flex flex-col pb-5 py-4 px-6 ">
      <h5 className="text-slate-50 text-xl pb-1 ml-11 font-bold">
        {props.nameCategory}
      </h5>
      {loading ? (
        <div className="w-full h-[399px] flex justify-center items-center">
          <div className="animate-spin h-10 w-10 border-t-2 border-slate-200 rounded-full"></div>
        </div>
      ) : (
        <div className="w-full flex gap-1 items-center">
          <div className="">
            <button className="text-slate-200" onClick={handleLeftClick}>
              <ChevronLeft size={35} />
            </button>
          </div>
          <div
            className="carossel w-[97%] flex flex-nowrap gap-4 overflow-x-auto scroll-smooth overflow-y-hidden "
            ref={carossel}
          >
            {props.category.map((movie) => (
              <div
                key={movie.id}
                className="card h-[399px] min-w-[247px] pb-8 mb-1 "
              >
                <div className="image h-[100%] w-full relative group ">
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
            ))}
          </div>
          <button className="" onClick={handleRightClick}>
            <ChevronRight size={35} className="text-slate-200 h-16" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrosel;
