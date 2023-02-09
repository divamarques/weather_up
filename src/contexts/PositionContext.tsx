import { LeafletEventHandlerFnMap } from 'leaflet';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { weatherService } from '../services/weatherService';

interface Position {
  lat: number;
  lng: number;
}

interface PositionContextData {
  position: Position | null;
  eventHandlers?: LeafletEventHandlerFnMap;
  setPosition(position:Position): void; 
  isNewTableCities: Array<any>;
  getListCities(): Promise<void>;
}

interface PositionProviderProps{
  children: ReactNode;
}

const PositionContext = createContext<PositionContextData>({} as PositionContextData );

function PositionProvider ({children}: PositionProviderProps){
  const [position, setPosition] = useState<Position | null>(null);

  const eventHandlers = useMemo(
  () => ({
      dragend(e:any) {
        const marker = e.target.getLatLng();
        if (marker != null) {
          setTimeout(() => {
            setPosition(marker) 
          },2000)
        } 
      },
    }),[],
 )

 const [isNewTableCities, setIsNewTableCitie] = useState([]);


 async function getListCities(){

   weatherService
   .getCities(position?.lat, position?.lng)
   .then((response) =>{
     setIsNewTableCitie(response.data);
     console.log(response.data);
     
   });
 }

  return(
    <PositionContext.Provider value={{position, eventHandlers , setPosition, isNewTableCities, getListCities}}>
      {children}
    </PositionContext.Provider>
  );
}

function usePosition():PositionContextData{
  const context = useContext(PositionContext);

  return context;
}

export{ usePosition, PositionProvider}