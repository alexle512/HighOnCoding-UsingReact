import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import './Components/Header.css'
import Footer from './Components/Footer.js'
import './Components/Footer.css'
import Curseofthecurrentreview from './Components/curseofthecurrentreviews.js';
import WatchKit from './Components/watchKit.js'
import './Components/watchKit.css'
import IntroSwift from './Components/introtoswift.js'


class App extends Component {
  render() {
    return (
       <div>
         <Header />
        <p><Curseofthecurrentreview /></p>
        <p> <WatchKit/> </p>
        <p> <IntroSwift/> </p>

       </div>



      
    )
  }
}






export default App;
