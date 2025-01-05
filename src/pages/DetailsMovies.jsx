import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DetailsMovie() {
  const location = useLocation()
  const navigate = useNavigate()

  function ClickBackHome(){
    navigate(-1)
  }

  return (
    <div className="w-full h-screen bg-slate-950">
      <header className="h-16 bg-slate-900 flex items-center gap-14 py-2.5 px-6 shadow-xl">
        <h1 className="text-2xl text-slate-50 font-bold">MoviesFlix</h1>
      </header>
      <div className="w-full h-[600px] flex pt-8 justify-center relative">
        <button className="text-white absolute top-2 left-2">
          <ChevronLeft size={35} onClick={ClickBackHome}/>
        </button>
        <div className="w-[70%] flex gap-5 p-5 rounded-xl bg-black/25 shadow-lg">
         <div className=" w-[320px]">
            <img className=" w-full rounded-md "
            src={`https://image.tmdb.org/t/p/original${location.state.movie.poster_path}`} alt="" />
         </div>
         <div className="w-[754px]">
            <h1 className=" text-slate-100 text-3xl font-bold pb-1 ">{location.state.movie.title}</h1>
            <h3 className="text-slate-100 text-xl font-bold mt-2" >{location.state.movie.overview}</h3>
            <div className="pt-4">
            <span className="text-slate-100 text-lg font-bold">{location.state.movie.release_date.slice(0,4)}</span>
            </div>
         </div>
      </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
