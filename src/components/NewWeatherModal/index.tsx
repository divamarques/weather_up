import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
// import { Container } from "./styles";
import './styles.css';

interface NewWeatherModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item?: NewItemModaProps
}

interface NewItemModaProps {
  name: string;
  main: {
    temp:number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  },
  wind: {
    speed: number;
  }

}

export function NewWeatherModal({isOpen, onRequestClose, item}: NewWeatherModalProps) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      <div className="container">
        <div className="frame">
          <div className="moon">
            <div className="moon-crater1"></div>
            <div className="moon-crater2"></div>
          </div>
          <div className="hill-bg-1"></div>
          <div className="hill-bg-2"></div>
          <div className="hill-fg-1"></div>
          <div className="hill-fg-2"></div>
          <div className="hill-fg-3"></div>
          <div className="front">
            <div className='container-info'>
              <div className="temperature">
              {item?.main.feels_like}°c
              </div>
              <div className="icons">
                <i className="fas fa-wind"></i><br/><i className="fas fa-tint"></i>
              </div>
              <div>
                <div className="info">
                {item?.wind.speed}km/h <br/> {item?.main.humidity}%
                </div>
                <table className="preview">
                  <tbody>
                    <tr>
                      <td>Max</td>
                      <td>{item?.main.temp_max.toFixed(0)}°c</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>{item?.main.temp_min.toFixed(0)}°c</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="proverb">“Frogs croaking in the lagoon,<br/>Means rain will come real soon.”</div>
          </div>
          <div className="drop-big-1"></div>
          <div className="drop-big-2"></div>
          <div className="drop-big-3"></div>
          <div className="drop-big-4"></div>
          <div className="drop-big-5"></div>
          <div className="drop-big-6"></div>
          <div className="drop-big-7"></div>
          <div className="drop-big-8"></div>
          <div className="drop-big-9"></div>
          <div className="drop-big-10"></div>
          <div className="drop-medium-1"></div>
          <div className="drop-medium-2"></div>
          <div className="drop-medium-3"></div>
          <div className="drop-medium-4"></div>
          <div className="drop-medium-5"></div>
          <div className="drop-medium-6"></div>
          <div className="drop-medium-7"></div>
          <div className="drop-medium-8"></div>
          <div className="drop-medium-9"></div>
          <div className="drop-medium-10"></div>
          <div className="drop-small-1"></div>
          <div className="drop-small-2"></div>
          <div className="drop-small-3"></div>
          <div className="drop-small-4"></div>
          <div className="drop-small-5"></div>
          <div className="drop-small-6"></div>
          <div className="drop-small-7"></div>
          <div className="drop-small-8"></div>
          <div className="drop-small-9"></div>
          <div className="drop-small-10"></div>
        </div>
     </div>
    </Modal>
  );
}
