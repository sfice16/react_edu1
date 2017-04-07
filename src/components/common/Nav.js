import React from 'react';
import Navheader from './Navheader';
import Navbar from './Navbar';

class Nav extends React.Component {
    render(){
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <Navheader/>
              <Navbar/>
            </div>
          </nav>
        );
    }
}

export default Nav;
