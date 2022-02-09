import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import CountriesList from './components/CountriesList'
import Country from './components/Country'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<CountriesList/>}/>
        <Route path='/countries/:name' element={<Country />}/>
      </Routes>
    </Router>

  )
}

export default App;
