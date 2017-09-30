import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HomeApp from './HomeBundle/HomeApp';
import DragBlocksApp from './DragBlocksBundle/DragBlocksApp';
import WeatherApp from './WeatherAppBundle/WeatherApp';
import './index.scss';

function App() {
  let activeStyle = {
    fontWeight: 'bold',
    color: 'red'
   };
  return (
    <Router>
      <div>
        <div className="header">
          <Menu isOpen={false}>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/drag-blocks" activeClassName="active">Drag Blocks</NavLink>
            <NavLink to="/weather" activeClassName="active">Weather</NavLink>
          </Menu>
        </div>
        <Switch>
          <Route exact path='/' component={HomeApp}/>
          <Route path='/drag-blocks' component={DragBlocksApp}/>
          <Route path='/weather' component={WeatherApp}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))