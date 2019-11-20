import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Clock from './ClockDisplay'
import Profile from './Profile'

import { Parallax, Background } from 'react-parallax';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.Navbar_Items = [
      { name: "Portfolio", URL: '#', target: '_SELF' },
      { name: "Profile", URL: '#', target: '_SELF' },
      { name: <FontAwesomeIcon icon={faHackerrank} />, URL: 'https://www.hackerrank.com/mcgill_will/', target: '_blank' },
      { name: <FontAwesomeIcon icon={faLinkedin} />, URL: 'https://www.linkedin.com/in/will-mcgill/', target: '_blank' },
      { name: <FontAwesomeIcon icon={faGithub} />, URL: 'https://github.com/WillMcGill', target: '_blank' },];

    this.state = { page: 5 }

    this.getStateFromChild = this.getStateFromChild.bind(this);
  }

  getStateFromChild(page) {
    this.setState({ page: page })
  }

  render() {


    return (

        <>
      
          
        <div className="App">
          <Navbar NavbarItems={this.Navbar_Items} pageChange={this.getStateFromChild} />
          
          { this.state.page == 5 ? <Hero /> : ""}
          { this.state.page == 0 ? 
          <>
          <Clock /><Card />
          </> 
          : ""}
          { this.state.page == 1 ? <Profile /> : ""}
          
        </div>
        <div style={{ height: '200px' }} />
        

        </>
      
    )
  }
}

export default App
