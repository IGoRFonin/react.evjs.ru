import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './WeatherAppBundle/WeatherApp'
import './index.scss'

function App() {
  return (
    <div>
      <WeatherApp />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))