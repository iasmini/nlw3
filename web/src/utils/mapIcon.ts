import Leaflet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [30, 40],
  // indica qual posicao do icone deve ser considerado o ponto no mapa (se nao coloca isso, considera o centro
  // do icone como o ponto no mapa e deve ser a ponta da seta do icone)
  // 15 eixo x (metade do x do iconsize) e 40 eixo y (ponto mais baixo do iconsize)
  iconAnchor: [15, 40],
  popupAnchor: [150, 2]
})

export default mapIcon;