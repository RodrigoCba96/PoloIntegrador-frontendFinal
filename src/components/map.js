import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapComponent = ({ latitude , longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
};

export default MapComponent;
