import React, { Component } from 'react';

// components
import BedRoom1 from './BedRoom1';
import Bath from './Bath';
import BedRoom2 from './BedRoom2';
import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';
import BedRoom3 from './BedRoom3';

// app.css
import './App.css'

class componentName extends Component {
  render() {
    return (
      // Rendring component
      <div className='container'>
        <LivingRoom />
        <BedRoom1 />
        <BedRoom2 />
        <BedRoom3 />

        <div id=''>
          <Bath />
        </div>

        <div id=''>
          <Kitchen />
        </div>
        
        </div>
      
    );
  }
}

export default componentName;