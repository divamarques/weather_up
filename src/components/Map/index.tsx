import { useCallback, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { usePosition } from "../../contexts/PositionContext";

export function Map() {

  function LocationMarker() {
    const {eventHandlers, position, setPosition} = usePosition();

    const [draggable, setDraggable] = useState(false);
    let markerRef = useRef(null);

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e:any) {
        setPosition(e.latlng)
        
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    
    const toggleDraggable = useCallback((e:any) => {
      setDraggable((d) => !d)
    }, [])
    
  
    return position === null ? null : (
      <Marker 
      position={{lat:position.lat, lng:position.lng}}
      draggable={draggable}
      eventHandlers={eventHandlers}
      ref={markerRef}
      >
        <Popup>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'I am free! Show me the world !'
            : 'Click here ( X ) and set me free...'}
        </span>
        </Popup>
      </Marker>
    )
  }
  return (
    <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}