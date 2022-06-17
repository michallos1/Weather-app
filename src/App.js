import React from "react";
import './App.css';
import WeatherApp from './weather-build/main-page/weather-app';
import InfoApp from './weather-build/info-page/info-app';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pogoda-info">Information</Link></li>
        </ul>
      </nav>

        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/pogoda-info" element={<InfoApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </Router>

  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App;
