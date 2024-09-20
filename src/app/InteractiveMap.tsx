import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
