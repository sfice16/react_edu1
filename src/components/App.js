import React, { Component } from 'react';
import Nav from './common/Nav';
import Home from './home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './about/About'
import Contact from './contact/Contact'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <Router>
          <div>
           {/* Router는 단 하나의 child를 가질수있다 */}

           <Nav/>
           {/* Route는 어떤 링크를 열지에 관해 설정해준다 */}
           <Route exact path="/" component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
          </div>
        </Router>
    );
  }
}

export default App;
