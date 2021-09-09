import React, { Component } from 'react';


// components
import BedRoom1 from './BedRoom1';
import BedRoom2 from './BedRoom2';
import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';
import BedRoom3 from './BedRoom3';
import FullBath from './FullBath';
import HalfBath from './HalfBath';
import Oven from './Oven';
import Sink from './Sink';

// app.css
import './App.css'

class App extends Component {
  render() {
    return (
      // Rendring component
      <div className="container">

        <div>
          <LivingRoom />
        </div>

        <div>
          <BedRoom1 />
        </div>

        <div>
          <BedRoom2 />
        </div>

        <div> 
          <BedRoom3 />
        </div>

        <div>
          <Kitchen />
        </div>

        <div>
          <HalfBath />
        </div>
        
        <div>
          <FullBath />
        </div>

        <div>
        <Oven />
        </div>

        <div>
        <Sink />
        </div>
        

        </div>
      
    );
  }
}

export default App;