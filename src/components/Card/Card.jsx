import React from 'react';
import './Card.css';
import clearskyd from '../images/clearskyd.gif';
import clearskyn from '../images/clearskyn.gif';
import fewcloudsd from '../images/fewcloudsd.gif';
import fewcloudsn from '../images/fewcloudsn.gif';
import scatteredcloudsd from '../images/scatteredcloudsd.gif';
import scatteredcloudsn from '../images/scatteredcloudsn.gif';
import brokencloudsd from '../images/brokencloudsd.gif';
import brokencloudsn from '../images/brokencloudsn.gif';
import showerraind from '../images/showerraind.gif';
import showerrainn from '../images/showerrainn.gif';
import raind from '../images/raind.gif';
import rainn from '../images/rainn.gif';
import thunderstormd from '../images/thunderstormd.gif';
import thunderstormn from '../images/thunderstormn.gif';
import snowd from '../images/snowd.gif';
import snown from '../images/snown.gif';
import mistd from '../images/mistd.gif';
import mistn from '../images/mistn.gif';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
  let background = '';
  let color = 'black';
  
    switch (img) {
      case '01d':
        background = clearskyd
        color = 'white'
        break;
      case '01n':
        background = clearskyn
        color = 'white'
        break;
      case '02d':
        background = fewcloudsd
        color = 'white'
        break;
      case '02n':
        background = fewcloudsn
        color = 'white'
        break;
      case '03d':
        background = scatteredcloudsd
        color = 'white'
        break;
      case '03n':
        background = scatteredcloudsn
        color = 'white'
        break;
      case '04d':
        background = brokencloudsd
        color = 'white'
        break;
      case '04n':
        background = brokencloudsn
        color = 'white'
        break;
      case '09d':
        background = showerraind
        color = 'white'
        break;
      case '09n':
        background = showerrainn
        color = 'white'
        break;
      case '10d':
        background = raind
        color = 'white'
        break;
      case '10n':
        background = rainn
        color = 'white'
        break;
      case '11d':
        background = thunderstormd
        color = 'white'
        break;
      case '11n':
        background = thunderstormn
        color = 'white'
        break;
      case '13d':
        background = snowd
        break;
      case '13n':
        background = snown
        color = 'white'
        break;
      case '50d':
        background = mistd
        color = 'white'
        break;
      case '50n':
        background = mistn
        color = 'white'
        break;      
      default:
        break;
    }
    const linkStyle = {
      margin: "1rem",
      color: 'White',
      fontSize: '1.5em',
    };

    return (
      <div className="card" style={{'backgroundImage': `url(${background})`, 'color': color}}>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to ={`/ciudad/${id}`} style={linkStyle}>{name}</Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className='minmax'>Min</p>
              <p className='minmax'>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className='minmax'>Max</p>
              <p className='minmax'>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
