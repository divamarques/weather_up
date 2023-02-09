import { useEffect, useState } from 'react';
import { NewWeatherModal } from '../NewWeatherModal';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from 'reactstrap';


interface DashboardPorps{
  listedCities : any;
}

interface NewItemModaProps {
  name: string;
  main: {
    temp:number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  }
  wind: {
    speed: number;
  }
}

export function CitiesTable({ listedCities }: DashboardPorps ){
  const [isItemModal, setIsItemModal] = useState<NewItemModaProps>();
  const [isNewWeatherModalOpen, setIsNewWeatherModalOpen] = useState<DashboardPorps[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseWeatherModal() {
    setIsOpenModal(false);
  }

  function openModal(obj:any){
    setIsItemModal(obj);
    setIsOpenModal(true);
  }

  useEffect(() => {
    setIsNewWeatherModalOpen(listedCities?.list)
    console.log(listedCities)
  },[ listedCities ])

  return(
    <Container >
          <CardGroup className='grid text-center' style={{ gap: '1rem'}} >
            {isNewWeatherModalOpen?.length > 0 && isNewWeatherModalOpen.map((listed: any) => {
              return(
                <Card className='card-holder'>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180" 
                    top
                    width="100%" 
                  />
                  <CardBody className='mr-3'>
                      <CardTitle tag="h5" key={listed.id}>
                        {listed.sys.country}
                      </CardTitle>
                      <CardSubtitle
                        className="mb-3 text-muted"
                        tag="h6"
                      >
                        {listed.name}
                      </CardSubtitle>
                      <CardText  style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <span>{listed.main.feels_like.toFixed(0)}°c</span>
                        <span>{listed.weather[0].description}</span>
                      </CardText>
                      <Button type="button" onClick={() => openModal(listed)}>
                        Show more info
                      </Button>
                  </CardBody>
                </Card>
              ) 
            })}
          </CardGroup>
        <NewWeatherModal
          item={isItemModal}
          isOpen={isOpenModal}
          onRequestClose={handleCloseWeatherModal}
        /> 
    </Container>
  );
}


