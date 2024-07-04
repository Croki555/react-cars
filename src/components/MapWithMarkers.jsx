import React from "react";
import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import L from 'leaflet';
import images from '../images.js';

const MapWithMarkers = ({ cars }) => {
    return (
        <div style={{ width: '100%', height: '700px', margin: '0 auto' }}>
            <MapContainer center={[59.9343, 30.3351]} zoom={10} style={{ width: '100%', height: '100%' }}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {cars.map((car) => (
                    <Marker key={car.id} position={[car.latitude, car.longitude]} icon={
                        new L.Icon({
                            iconUrl: images[car.id], 
                            iconSize: [100, 50], 
                            iconAnchor: [12, 41],
                            popupAnchor: [0, -41]
                        })
                        }>
                         <Popup>
                            <div className="card h-100 position-relative bordered-5">
                                <div className="card-header p-2">    
                                    <p className="m-0 mb-1 fw-bold text-center">{car.name} {car.model}</p>
                                    <img className="img-fluid w-100 m-0" src={images[car.id]} alt={`Машина ${car.name}`} style={{ height: '100px' }}/>
                                </div>
                                <div className="card-body p-2">
                                    <div className="mb-1">
                                        <p className="m-0">Цвет: <span className="d-inline-block rounded-circle border" style={{ width:'15px', height: '15px', backgroundColor: `${car.color}` }}></span></p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="m-0">Широта: <span className="d-inline-block rounded-circle">{car.latitude}</span></p>
                                    </div>
                                    <div className="mb-1">
                                        <p className="m-0">Долгота: <span className="d-inline-block rounded-circle">{car.longitude}</span></p>
                                    </div>
                                </div>
                                <div className="card-footer p-2">
                                    <span>Цена: {car.price.toLocaleString()}₽</span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export { MapWithMarkers };