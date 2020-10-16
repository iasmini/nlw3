import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
//yarn add @types/react-leaflet -D
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        
        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>
      {/* latitude, longitude de bh, retirados da url do google maps */}
      {/* sao 2 chaves pq a primeira indica q eh codigo js e a segunda q eh um objeto */}
      <Map
        center={[-19.9206816,-43.927388]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        {/* TileLayer: servidor de onde serao baixadas as imagens do mapa */}
        {/* {z}: zoom, {x}: coordenada x, {y}: coordenada y */}
        {/* opcao 1: TileLayer do leaflet */}
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}

        {/* opcao 2: TileLayer do mapbox */}
        {/* estilos de mapas: https://docs.mapbox.com/mapbox-gl-js/example/setstyle/ */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;