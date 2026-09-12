import {
  Menu,
  Bell,
  Home,
  Truck,
  Package,
  Wallet,
  UserRound,
  Info,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./rastreamento.css";


// Ícone do marcador
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type PropsRastreamento = {
    clickHome: () => void;
    clickRastreamento: () => void;
    clickPedidos: () => void;
    clickCarteira: () => void;
    clickPerfil: () => void;
};
export default function Rastreamento({ clickHome, clickRastreamento, clickPedidos, clickCarteira, clickPerfil }: PropsRastreamento) {

  // Coordenadas aproximadas para demonstração
  const london = {
    lat: 51.5074,
    lng: -0.1278,
  };

  const route = [
    [51.5074, -0.1278],
    [51.5070, -0.1200],
    [51.5060, -0.1100],
  ] as [number, number][];

  return (
    <main className="rastreamento-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="rastreamento-header">

        <button className="header-button">
          <Menu size={31} />
        </button>

        <h1>RASTREAMENTO</h1>

        <button className="header-button">
          <Bell size={31} />
        </button>

      </header>


      {/* =========================
          STATUS
      ========================= */}

      <div className="tracking-status">
        <Info size={16} />
        <span>Em andamento</span>
      </div>


      {/* =========================
          MAPA
      ========================= */}

      <section className="map-container">

        <MapContainer
          center={[london.lat, london.lng]}
          zoom={10}
          scrollWheelZoom={false}
          zoomControl={false}
          className="map"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Polyline
            positions={route}
            pathOptions={{
              color: "#1760f5",
              weight: 4,
            }}
          />

          <Marker
            position={[london.lat, london.lng]}
            icon={markerIcon}
          />

        </MapContainer>

      </section>


      {/* =========================
          ROTA
      ========================= */}

      <section className="route-card">

        {/* COLETA */}

        <div className="route-item">

          <div className="route-indicator">

            <div className="route-dot completed"></div>

            <div className="route-line"></div>

          </div>


          <div className="route-content">

            <div className="route-info">

              <strong>Coleta</strong>

              <span>São Paulo, SP</span>

              <small>Hoje, 08:00</small>

            </div>


            <div className="route-status completed-status">
              Concluída
            </div>

          </div>

        </div>


        {/* ENTREGA */}

        <div className="route-item delivery-item">

          <div className="route-indicator">

            <div className="route-dot current"></div>

          </div>


          <div className="route-content">

            <div className="route-info">

              <strong>Entrega</strong>

              <span>Teresina, PI</span>

              <small>12/09/2026, 08:00</small>

            </div>


            <div className="route-status current-status">
              Em andamento
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          NAVEGAÇÃO
      ========================= */}

      <nav className="bottom-nav">

        <button onClick={clickHome}>
          <Home />
        </button>

        <button className="active" onClick={clickRastreamento}>
          <Truck />
        </button>

        <button onClick={clickPedidos}>
          <Package />
        </button>

        <button onClick={clickCarteira}>
          <Wallet />
        </button>

        <button onClick={clickPerfil}>
          <UserRound />
        </button>

      </nav>

    </main>
  );
}