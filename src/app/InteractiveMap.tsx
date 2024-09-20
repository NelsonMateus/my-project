import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Carregar os componentes dinamicamente
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const InteractiveMap = () => {
  const [mapStyle, setMapStyle] = useState('street');

  return (
    <MapContainer center={[-14.235, -51.9253]} zoom={4} style={{ height: '100vh', width: '100%' }}>
      {mapStyle === 'street' && (
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      )}
      {/* Outras camadas de mapa conforme a lógica */}
    </MapContainer>
  );
};

export default InteractiveMap;
