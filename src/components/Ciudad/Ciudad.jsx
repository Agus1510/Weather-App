import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Ciudad.css";

export default function Ciudad(props) {
  const { ciudadId } = useParams();
  const [infoCity, setInfoCity] = useState();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=4ae2636d8dfbdc3044bede63951a019b`
  )
    .then((respuesta) => respuesta.json())
    .then((info) => {
      const objetoCiudad = {
        name: info.name,
        temp: info.main.temp,
        weather: info.weather[0].main,
        wind: info.wind.speed,
        clouds: info.clouds.all,
        latitud: info.coord.lat,
        longitud: info.coord.lon,
      };

      setInfoCity(objetoCiudad);
    });

  if (props.city) {
    return (
      <div className="ciudad">
        <div className="container">
          <h2>{props.city.name}</h2>
          <div className="info">
            <div>Temperature: {props.city.temp} ºC</div>
            <div>Weather: {props.city.weather}</div>
            <div>Wind: {props.city.wind} km/h</div>
            <div>Clouds: {props.city.clouds}</div>
            <div>Latitude: {props.city.latitud}º</div>
            <div>Longitude: {props.city.longitud}º</div>
          </div>
        </div>
      </div>
    );
  } else if (!infoCity) {
    return <h1> Cargando.... </h1>;
  } else {
    return (
      <div className="ciudad">
        <div className="container">
          <h2>{infoCity.name}</h2>
          <div className="info">
            <div>Temperature: {infoCity.temp} ºC</div>
            <div>Weather: {infoCity.weather}</div>
            <div>Wind: {infoCity.wind} km/h</div>
            <div>Clouds: {infoCity.clouds}</div>
            <div>Latitude: {infoCity.latitud}º</div>
            <div>Longitude: {infoCity.longitud}º</div>
          </div>
        </div>
      </div>
    );
  }
}
