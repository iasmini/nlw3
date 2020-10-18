import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
//yarn add @types/react-leaflet -D
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import api from "../services/api";
import mapIcon from "../utils/mapIcon";
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OrphanagesMap() {
  // useState: estado no react é qualquer tipo de informacao que quero armazenar
  // no componente para reutilizacao
  // retorna 2 valores: o primeiro é o valor da variavel e o segundo é a função q será usada pra atualizar o
  // valor da variavel
  // <Orphanage[]> seta o tipo da variavel orphanages como uma lista do tipo Orphanage (interface)
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  // como no react o componente é executado sempre que ele tem alguma de suas propriedades alterada ou
  // quando um componente acima dele também tem uma propriedade alterada
  // nao podemos colocar a requisicao direto no componente, por isso usamos o useEffect (é um hook)
  // sempre que quisermos fazer uma requisicao quando o componente for exibido na tela usamos o useEffect
  // recebe 2 parametros. o primeiro é qual acao será executada e o segundo é quando
  // a funcao será executada quando algum dos valores do vetor for alterado
  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, [])
  
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
        
        {/* diferentemente do foreach o map percorre a lista e retorna algo */}
        {/* se nao tiver key={orphanage.id} dá erro no console.log: Each child in a list should have a unique "key" prop. */}
        {/* quando faz um map o primeiro item que vem no html dentro do map precisa ter uma propriedade chamada
            key que indica qual o campo unico de cada orfanato */}
        {orphanages.map(orphanage => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}

      </Map>
      
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;