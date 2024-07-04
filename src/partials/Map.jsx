import { MapWithMarkers } from '../components/MapWithMarkers';

const Map = ({ cars }) => {
    return (
        <MapWithMarkers cars={cars} />
    );
};

export { Map }