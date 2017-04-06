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
