import React, { useState } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards.jsx';
import Buttons from '../components/Buttons/Buttons.jsx'
import Ciudad from '../components/Ciudad/Ciudad.jsx'
import './App.css';
import { Route } from 'react-router-dom';

export default function App() {


  const [ciudades, setCiudades] = useState([])

  const { REACT_APP_API_KEY } = process.env

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
        .then((respuesta) => {
                return respuesta.json()
        })
        .then((informacion) => {
              const nuevaCiudad = {
                min: Math.round(informacion.main.temp_min),
                max: Math.round(informacion.main.temp_max),
                img: informacion.weather[0].icon,
                id: informacion.id,
                wind: informacion.wind.speed,
                temp: informacion.main.temp,
                name: informacion.name,
                weather: informacion.weather[0].main,
                clouds: informacion.clouds.all,
                latitud: informacion.coord.lat,
                longitud: informacion.coord.lon 
              }

              const ciudadEncontrada = ciudades.find(ciudad => ciudad.id === nuevaCiudad.id)
              if(ciudadEncontrada) return alert("la ciudad ya se encuentra!")
              else setCiudades((todasLasCiudadesActuales) => [...todasLasCiudadesActuales, nuevaCiudad]);
              
            })
  }
  

  function onClose(id) {

    const ciudadFiltrada = ciudades.filter(ciudad => ciudad.id !== id)

    setCiudades(ciudadFiltrada);

  }

  function onFilter(cityId){
    const ciudad= ciudades.find(city => city.id === parseInt(cityId))
    console.log(ciudad)
    return ciudad
  }

  return (
    <div className="App">
            <Nav onSearch={onSearch}/>
            <div className='line'></div>
            <div className='line2'>
              <Buttons/>
            </div>
          <div className="background">
            <Route path='/' exact>
            <Cards cities={ciudades} onClose={onClose}/>
            </Route>

            <Route path='/ciudad/:id' render={({match})=> <Ciudad city={onFilter(match.params.id)}/>}/>
            </div>
    </div>
  );
}

