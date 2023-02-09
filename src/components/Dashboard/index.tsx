import { Col, Row, Container } from "reactstrap";
import { CitiesTable } from "../CitiesTable";
import "./styles.css";
import { usePosition } from "../../contexts/PositionContext";
import Modal from "react-modal";
import manInLake from '../../assets/videos/human.mp4'

Modal.setAppElement("#root");



 export function Dashboard() {
  const {isNewTableCities} = usePosition();

  return (
     <section className="section mt-5 mb-5 position-relative" id="dashboard">
        <video autoPlay loop muted style={{ position: 'absolute', zIndex: -1, width: '100%', minHeight: '100%', objectFit: 'cover' }}>
            <source src={manInLake} type='video/mp4' />
          </video>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} md={8}>
              <div className="title text-center mb-5">
                <h3 className="font-weight-normal text-dark mt-5"><span className="text-primary">What's happening with the Weather, check it out!</span></h3>
                <p className="text-muted">
                  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
            </Col>
            <Col className="col-xs-3 justify-content-center mr-auto">
              <CitiesTable listedCities={isNewTableCities} />
            </Col>
            {isNewTableCities.length === 0 && (
              <Col lg={12} md={8}> 
                <div className="title text-center mb-5 centralized">
                  <h3 className="font-weight-normal text-dark mt-5">
                    <span className="text-danger" style={{ fontWeight: 'bold'}}>Don't forget to select your current location first!</span>
                  </h3>
                <p className="text-dark" style={{ fontWeight: 'bold'}} >
                  For the cities to appear with their respective information, don't forget to click the map above (to secure your location) and click the 'FIND WEATHER NEAR ME' button!
                </p>
              </div>
              </Col>
            ) }
          </Row>
        </Container>
      </section>
  );
}
