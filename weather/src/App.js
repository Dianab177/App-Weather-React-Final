import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bergondo"/>
         <footer className="weather-link">
         <a href="https://github.com/Dianab177/App-Weather-React-Final" target="_blank" title="link to github"  rel="noopener noreferrer">Open-source code</a>, by <a href="https://www.linkedin.com/in/dianaborrajo/">Diana Borrajo</a> 
         </footer>
         </div>
    </div>
  );
}

export default App;
