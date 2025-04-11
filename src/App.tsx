import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './features/home/Home'
import About from './features/about/About'
import Horoscope from './features/horoscope/Horoscope'
import Products from './features/products/Products'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='horoscope' element={<Horoscope />} />
      <Route path='products' element={<Products />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
