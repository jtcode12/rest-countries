import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'


function App() {
  return (
    <>
      <Header />
      <Filter />
      <CountriesList />
    </>

  )
}

export default App;
