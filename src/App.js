import React from 'react'
import './App.css';
import { Route } from "wouter"
import Home from "./pages/Home"
import SearchMovies from './pages/SearchMovies'
import SearchSeries from './pages/SearchSeries';
import Error404 from './pages/404'
import Movies from './pages/Movies';
import Series from './pages/Series';
import Games from './pages/Games';


export default function App() {
  return <>
      <Route
          component={Home}
          path="/"
      />  

      <Route
          component={Movies}
          path="/movie"
      />  

      <Route
          component={Series}
          path="/serie"
      />  

      <Route
          component={Games}
          path="/game"
      />  

      <Route
        component={SearchMovies}
        path="/search/movie/:keyword" 
      />

      <Route
        component={SearchSeries}
        path="/search/serie/:keyword" 
      />

      
      
      {/* <Route
        component={Detail}
        path="/gif/:id"
      />   */}

      <Route
        component={Error404}
        path="/404" 
      />
  </>
}
