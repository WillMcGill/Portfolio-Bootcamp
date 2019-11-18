import React from 'react';
import logo from './logo.svg';
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
import Blog from './Blog'

import { ParallaxProvider } from 'react-scroll-parallax'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.Navbar_Items = [
      { name: "Portfolio", URL: '#', target: '_SELF' },
      { name: "Blog", URL: '#', target: '_SELF' },
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
      <ParallaxProvider>
        <div className="App">
          <Navbar NavbarItems={this.Navbar_Items} pageChange={this.getStateFromChild} />
          
          { this.state.page == 5 ? <Hero /> : ""}
          { this.state.page == 0 ? 
          <>
          <Clock /><Card />
          </> 
          : ""}
          { this.state.page == 1 ? <Blog /> : ""}

        </div>
      </ParallaxProvider>
    )
  }
}

export default App
