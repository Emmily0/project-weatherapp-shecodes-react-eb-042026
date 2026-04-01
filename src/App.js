import './App.css';
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
     
      <WeatherSearch />
{""}
      <footer>
      <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer" title="SheCodes WeatherApp React Project">SheCodes</a> 
  {""} React Project coded in 2026 by <a href="https://www.shecodes.io/graduates/15505-emily-berner" target="_blank" rel="noreferrer" title="Emily's SheCodes profile"><strong>Emily Berner</strong></a>
  , open-sourced on <a href="https://github.com/Emmily0/project-weatherapp-shecodes-react-eb-042026" target="_blank" rel="noreferrer" title="Emily's WeatherApp React Project on GitHub">GitHub</a> 
  {""} and hosted on <a href="https://projectweather-shecodesreact-eb042026.netlify.app/" target="_blank" rel="noreferrer" title="Emily's WeatherApp React Project on Netlify">Netlify</a> 
  </footer>

    </div>
  );
}

export default App;
