import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { urls } from '@/shared/urls/index'
import '@/assets/sass/style.scss'
import Layout from '@/shared/layout/Layout'
import { RouterProvider } from 'react-router'
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Pricing from '@/pages/Pricing';
import Blog from '@/pages/Blog';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path={urls.HOME}  element={<Layout/>} >
      <Route path={urls.HOME}  element={<Home/>} />
      <Route path={urls.ABOUT}  element={<About/>} />
      <Route path={`${urls.PRODUCt}/:id`} element={<ProductDetails/>}/>
      
      <Route path={urls.SERVICES}  element={<Services/>} />
      <Route path={urls.PRICING}  element={<Pricing/>} />
      <Route path={urls.BLOG}  element={<Blog/>} />
      </Route>


    )
  )






  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App