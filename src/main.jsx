import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MoviesPage from './pages/MoviesPage.jsx'
import DetailsMovie from './pages/DetailsMovies.jsx'

const router = createBrowserRouter([
  {
   path:"/",
   element: <App/>, 
  },
  {
    path: "/movies",
    element:<MoviesPage/>
  },
  {
    path: "/movie/detail",
    element:<DetailsMovie/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
