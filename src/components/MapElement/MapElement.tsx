import classes from "./MapElement.module.css";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useEffect, useState, memo } from "react";

interface IMapElementProps {
  onLocationChange: (lat: number, long: number) => void;
}

const MapElement = (props: IMapElementProps) => {
  const { onLocationChange } = props;
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0, 0,
  ]);

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const Markers = () => {
    useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        onLocationChange(e.latlng.lat, e.latlng.lng);
      },
    });

    return selectedPosition[0] ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  };

  if (initialPosition[0] === 0) {
    return <p>Lodaing...</p>;
  }

  return (
    <MapContainer
      className={classes.container}
      center={selectedPosition[0] !== 0 ? selectedPosition : initialPosition}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Markers />
    </MapContainer>
  );
};

export default memo(MapElement);
