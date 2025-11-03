import './WeatherForecast.css';
import ImageComponent from './ImageComponent.jsx';
import weatherForecasts from './WeatherData';

const WeatherForecast = ({ forecast }) => {
  
  return (
    <section>
        {weatherForecasts.map((forecast) => (
          <div className="weather" key={forecast.day}>
            <h2>{forecast.day}</h2>
           <ImageComponent src={forecast.img} alt={forecast.imgAlt} />
            <p>
              <span>conditions: </span>
              {forecast.conditions}
            </p>
            <p>
              <span>time: </span>
              {forecast.time}
            </p>
          </div>
        ))}
      </section>
  );
};



export default WeatherForecast;
