import React from 'react'
// import Restrurant from './component/Basics/Restrurant'
import Temp from './component/weather/temp'
import './App.css';
import bgImage from './video/backvideo.mp4'

const App = () => {
  return (
    
    <div className="App">
      <video autoPlay loop muted playsInline>
        <source src={bgImage} type="video/mp4"/>
      </video>
      <Temp/>
    </div>
    
  )
}

export default App
