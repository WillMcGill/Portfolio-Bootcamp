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

class App extends React.Component {


  constructor(props) {
    super(props);
    this.Navbar_Items = [
      { name: "Profile", URL: '#' , target: '_SELF'},
      { name: "Blog", URL: '#' , target: '_SELF'},
      { name: "Link", URL: '#' , target: '_SELF'},
      { name: <FontAwesomeIcon icon={faHackerrank} />, URL: 'https://www.hackerrank.com/mcgill_will' , target: '_blank'},
      { name: <FontAwesomeIcon icon={faLinkedin} />, URL: 'https://www.linkedin.com/in/will-mcgill/' , target: '_blank' },
      { name: <FontAwesomeIcon icon={faGithub} />, URL: 'https://github.com/WillMcGill' , target: '_blank'}];
  }

  render(){
    
    return (
    <div className="App">
      <Navbar NavbarItems={this.Navbar_Items} />
      <Hero />
    </div>
  );
}
}

export default App
