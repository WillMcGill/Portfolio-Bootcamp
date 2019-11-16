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
import { ParallaxProvider } from 'react-scroll-parallax'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.Navbar_Items = [
      { name: "Portfolio", URL: 'javascript:changeState(2)', target: '_SELF' },
      { name: "Blog", URL: '#', target: '_SELF' },
      { name: "Link", URL: '#', target: '_SELF' },
      { name: <FontAwesomeIcon icon={faHackerrank} />, URL: 'https://www.hackerrank.com/mcgill_will/', target: '_blank' },
      { name: <FontAwesomeIcon icon={faLinkedin} />, URL: 'https://www.linkedin.com/in/will-mcgill/', target: '_blank' },
      { name: <FontAwesomeIcon icon={faGithub} />, URL: 'https://github.com/WillMcGill', target: '_blank' }];

    this.state = { 'page': 2 }

    this.getStateFromChild = this.getStateFromChild.bind(this);
  }
  
  getStateFromChild(page){
    this.setState({'page' : page})
  }

  render() {

    

    if (this.state.page == 1) {
      return (
        <div className="App">
          <Navbar NavbarItems={this.Navbar_Items} PageChange = {this.getStateFromChild}/>
          <Hero />
        </div>
      );
    }
  
    if (this.state.page == 2) {
      return (
        <ParallaxProvider>
        <div className="App d-inline">
          <Navbar NavbarItems={this.Navbar_Items} PageChange = {this.getStateFromChild}/>
         
         
          <Card />
          
          
        </div>
        </ParallaxProvider>
      );
    }
  
  
  
  }
}

export default App
