import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryFilter from './CountryFilter'
import Countries from './Countries'

const App = () => {
  const url = 'https://restcountries.eu/rest/v2/all'
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  const setInitialCountries = () => {
    axios.get(url).then(response => {
      const countries = response.data
      console.log(countries)
      setCountries(countries.map(
        country => {return {show: false, ...country}}
      ))
    })
  }

  const handleFilterChange = (event) => {
    const target = event.target
    console.log('filter change', target.value)
    setCountryFilter(target.value)
  }

  useEffect(setInitialCountries, [])

  return(
    <div>
      <CountryFilter countryFilter={countryFilter} handleFilterChange={handleFilterChange}/>
      <Countries countries={countries} setCountries={setCountries} countryFilter={countryFilter} />
    </div>
  )
}

export default App;
