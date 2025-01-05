import { NavLink } from "react-router-dom";

function Navbar(movies) {
  return (
    <nav className="flex gap-8">
      <h2 className="text-xl pr-3 text-slate-200 hover:text-[22px] duration-100">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-slate-200" : ""
          }
          end
        >
          Inicio
        </NavLink>
      </h2>
      <h2 className="text-xl pr-3 text-slate-200 hover:text-[22px] duration-100">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-slate-200" : ""
          }
          state={movies}
          end
        >
          Filmes
        </NavLink>
      </h2>
    </nav>
  );
}

export default Navbar;
