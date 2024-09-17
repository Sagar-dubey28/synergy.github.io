import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSection = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl text-center mb-6">Ongoing & Upcoming Projects</h1>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-96 w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.7041, 77.1025]}>
          <Popup>Project: New Delhi Gas Pipeline</Popup>
        </Marker>
        <Marker position={[19.0760, 72.8777]}>
          <Popup>Project: Mumbai Water Treatment</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;

