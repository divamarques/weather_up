import { Container, Row, Col, Button, Nav,  } from 'reactstrap';
import { usePosition } from "../../contexts/PositionContext";
import { Map } from '../Map';
import clouds from '../../assets/videos/Nuvens.mp4'
import { useEffect, useState } from 'react';
// import { useNavigation } from 'react-router-dom';


export default function Home(){
  const {getListCities} = usePosition();
  const [showScroll, setShowScroll] = useState(false);
  // const navigate = useNavigation();

  function handleShowWeatherCards() {
    getListCities();
    // navigate('/dashboard')
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);


  return (
    <section className="section position-relative" id='home'>
        <video autoPlay loop muted style={{ position: 'absolute', zIndex: -1, width: '100%', minHeight: '100%', objectFit: 'cover' }}>
          <source src={clouds} type='video/mp4' />
        </video>
        
       <div className='position-fixed ml-2 social-bar'>
          <Nav className=' flex-column'>
              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                type="button"
                size='lg'
              >
                {" "}
                <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </Button>
              <Button
                className="btn-icon-only rounded-circle "
                color="github"
                type="button"
                size='lg'
                onClick={() => window.open('https://github.com/divamarques/', '_blank')}
              >
                {" "}
                <span className="btn-inner--icon">
                  <i className="fab fa-github "></i>
                </span>
              </Button>
              
              <Button
                className="btn-icon-only rounded-circle"
                color="instagram"
                type="button"
                size='lg'
                onClick={() => window.open('https://www.instagram.com/divamarques/', '_blank')}
              >
                {" "}
                <span className="btn-inner--icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </Button>
              <Button
                className="btn-icon-only rounded-circle"
                color="pinterest"
                type="button"
                size='lg'
                onClick={() =>  window.open('https://www.linkedin.com/in/diogo-varotto-marques-53b3a232/', '_blank')}
              >
                {" "}
                <span className="btn-inner--icon">
                  <i className="fab fa-linkedin"></i> 
                </span>
              </Button>
          </Nav>
        </div>
      <Container>
        <Row className="align-items-center">
          <Col>
           
            <div className="pr-lg-5">
              <h1 className="mb-4  font-weight-normal line-height-1_4">See what's the weather like in your neighborhood and others <span className="text-primary font-weight-medium">5 around you!</span></h1>
              <p className="text-muted mb-4 pb-2">In order for this to happen, please allow your browser to use your current location, after that, just click on the map (anywhere) and wait until the mark hits the right spot!
              Soon as the marker appears, just click below in 'FIND WEATHER NEAR ME' and it will show you a list of 5 closest neighborhoods around you. Hope you enjoy!
              </p>
              <button type='button' onClick={handleShowWeatherCards} className="btn btn-primary" style={{marginRight: '2rem'}}>
                Find weather near me
              </button>
              <a href="https://github.com/divamarques/weather_up" className="btn btn-primary" target='_blank' rel="noreferrer">
                Access Github for this repository <span className="ml-2 right-icon ">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5">
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`scroll-to-top ${showScroll ? "show" : ""}`}>
        <a href="#home" onClick={scrollTop} style={{textDecoration: 'none'}}>
          <span className='text-warning'>Back to the top</span>
          <i className="fas fa-arrow-up text-warning" style={{transform: 'rotate(90deg)', marginLeft: '1rem'}}></i>
        </a>
      </div>
    </section>
  );
}
