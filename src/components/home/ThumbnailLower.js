import React from 'react';
import images from './images.jpg';

class ThumbnailLower extends React.Component {
    render(){
        return (
          <div className="col-xs-6 col-md-3">
              <a href="#" className="thumbnail">
                <img src={images} alt="images"/>
              </a>
          </div>
      );
    }
  }
  export default ThumbnailLower;
