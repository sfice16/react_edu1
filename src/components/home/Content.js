<<<<<<< HEAD:src/components/home/Content.js
import React from 'react';
import Jumbotron from './Jumbotron';
import Input from './InputForm';
import Thumbnail from './Thumbnail';

class Content extends React.Component {
    render(){
        return (
            <div className="container">
              <Jumbotron/>
              <Input/>
              <Thumbnail/>
            </div>
        );
    }
}
export default Content;
=======
import React from 'react';
import Jumbotron from './Jumbotron';
import Input from './Input';
import Thumbnail from './Thumbnail';

class Content extends React.Component {
    render(){
        return (
            <div className="container">
              <Jumbotron/>
              <Input/>
              <Thumbnail/>
            </div>
        );
    }
}
export default Content;
>>>>>>> ab03bd7f9ea65c089022ce77dabda361067b148d:src/components/Content.js
