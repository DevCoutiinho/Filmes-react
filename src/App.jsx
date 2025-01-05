import { useEffect, useState } from 'react'
import Navbar from './componentes/Navbar'
import { Outlet } from 'react-router-dom'
import Carrosel from './componentes/Carrosel'

function App() {
const [movies, setMovies] = useState([])
const [actionMovies, setActionMovies] = useState([])
const [comedyMovies, setComedyMovies] = useState([])
const [adventureMovies, setAdventureMovies] = useState([])
const [romanceMovies, setRomanceMovies] = useState([])
const [terrorMovies, setTerrorMovies] = useState([])

  useEffect(() =>{
  async function getMovies(){
    try{
      let page = Number(1)
      let allMovies = []

      while(page <= 5){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=402747e7142b53180f795d70bdfa2246&language=pt-br&page=${page}`);

        if(!response.ok){
          return alert("Erro ao carregar os dados do servidor")
        }

        const data = await response.json()
        allMovies = [...allMovies,...data.results]

        page++

      }

      setMovies(updateMovieIds(allMovies));      

    }catch(err){
      return alert(err)
    }
    
  }

  getMovies()
   
},[])

const updateMovieIds = (moviesList) => {
  return moviesList.map((movie, index) => ({
    ...movie,
    id: index + 1 
  }));
};

useEffect(() =>{
  function getMoviesAction(){
    const moviesAction = movies.filter(movie => movie.genre_ids.includes(28)) 
    setActionMovies(moviesAction)
  }

  function getMoviesComedy(){
    const moviesComedy = movies.filter(movie => movie.genre_ids.includes(35))
    setComedyMovies(moviesComedy)
  }

  function getMoviesAdventure(){
    const moviesAdventure = movies.filter(movie => movie.genre_ids.includes(12))
    setAdventureMovies(moviesAdventure)
  }

  function getMoviesRomance(){
    const moviesRomance = movies.filter(movie => movie.genre_ids.includes(10749))
    setRomanceMovies(moviesRomance)
  }

  function getMoviesTerror(){
    const moviesTerror = movies.filter(movie => movie.genre_ids.includes(27))
    setTerrorMovies(moviesTerror)
  }

  getMoviesAction()
  getMoviesComedy()
  getMoviesAdventure()
  getMoviesRomance()
  getMoviesTerror()

}, [movies])

console.log()

return (
  <div className='overflow-hidden'>
    <header className='h-16 bg-slate-900 flex items-center gap-14 py-2.5 px-6 shadow-xl'>
      <h1 className='text-2xl text-slate-50 font-bold' >MoviesFlix</h1>
      
     {movies.length ===0 ?(<Navbar/>):(<Navbar movies={movies}/>)} 
    </header>
    <div className= 'w-screen h-full bg-slate-950 flex flex-col pt-11'>
      <Carrosel category={actionMovies} nameCategory="Ação"/>
      <Carrosel category={comedyMovies} nameCategory="Comédia"/>
      <Carrosel category={adventureMovies} nameCategory="Aventura"/>
      <Carrosel category={romanceMovies} nameCategory="Romance"/>
      <Carrosel category={terrorMovies} nameCategory="Terror"/>
    </div>
  </div>
)

}

export default App


//402747e7142b53180f795d70bdfa2246 chave da api