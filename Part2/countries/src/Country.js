import React, { useState, useEffect } from 'react'

const Country = ({country, showWeather=false}) => {
  const [weather, setWeather] = useState({})

  const setInitialWeather = () => {
    let url = `http://api.weatherstack.com/current?access_key=dedde65249b0565dafdeeaa4fd9774c4&query=${country.name}`
    axios.get(url).then(
      response => {
        setWeather(data.current)
      }
    )
  }

  useEffect(setInitialWeather, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language, index) => <li key={index}>{language.name}</li>)}
      </ul>
      <img src={country.flag} height="150" width="150" />

    {showWeather ? (
      <div>
        <h2> Weather in {country.name}: </h2>
          <p><b>Temperature: </b>{weather.temperature}</p>
          <img src={weather.weather_icons[0]} height="50" width="50" />
          <p><b>Wind: </b>{weather.wind_speed}kph direction {weather.wind_dir}</p>
      </div> ) : null}
    )}
    </div>

    )
}

export default Country;
