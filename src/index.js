import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import HomeApp from './HomeBundle/HomeApp';
import WeatherApp from './WeatherAppBundle/WeatherApp';
import './index.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/weather">Weather</NavLink>
        </ul>
        <Switch>
          <Route exact path='/' component={HomeApp}/>
          <Route path='/weather' component={WeatherApp}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))