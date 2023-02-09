import { Dashboard } from './components/Dashboard';
import  Header  from './components/Header';
import { GlobalStyle } from './styles/global';
import { PositionProvider } from '../src/contexts/PositionContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

const WeatherUp = () =>  {
  
  return (
  
    <PositionProvider>
      <Header />
      <Home />
      <Dashboard  />
      <GlobalStyle />
    </PositionProvider>

  );
}

export default WeatherUp;