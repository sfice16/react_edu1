import React from 'react';
import {
  NavLink
} from 'react-router-dom'

class Navbar extends React.Component {

    constructor(props) {
      super(props);
        this.state = {
          activePage : 'about'
      }
    }

    handleActivePage(pagename){
        this.setState({activePage:pagename});
    }

  render(){

    return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className={this.state.activePage === 'home'? 'active' : ''}><NavLink to="/" onClick={() => {this.handleActivePage('home')}}>Home</NavLink></li>
          <li className={this.state.activePage === 'about'? 'active' : ''}><NavLink to="/about" onClick={() => {this.handleActivePage('about')}}>About</NavLink></li>
          <li className={this.state.activePage === 'contact'? 'active' : ''}><NavLink to="/contact" onClick={() => {this.handleActivePage('contact')}}>Contact</NavLink></li>
        </ul>
      </div>
    );
  }
}


export default Navbar;
