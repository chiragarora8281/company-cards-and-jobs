import React, { Component } from 'react';
import Company from './Components/Company';
import Navbar from './Navbar';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div id='main'>
        <Navbar/>
        <Company/>
        <Footer/>
      </div>
    )
  }
}
