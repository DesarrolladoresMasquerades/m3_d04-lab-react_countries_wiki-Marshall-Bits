import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import countries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const apiUrl = "https://restcountries.com/v2/all"

  const [countriesList, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setCountries(response.data);
    });
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div>
        <CountriesList countries={countriesList} />
      </div>

      <Routes>
        {countries.map((country) => (
          <Route
            exact
            path={country.alpha3Code}
            element={<CountryDetails country={country} />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
