import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css'

import Routes from "./routes";

require('dotenv').config();

// html dentro do javascript: JSX javascript xml
// o App é um componente. Componente no react é uma função que retorna um html (jsx)
function App() {
  return (
    <Routes />
  );
}

export default App;
