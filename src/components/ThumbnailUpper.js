import React from 'react';
import images from './images.jpg';

class ThumbnailUpper extends React.Component {
    render(){
        return (
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={images} alt="images"/>
                <div className="caption">
                  <h3>Thumbnail label1</h3>
                  <p>img here</p>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            </div>
         );
      }
}
export default ThumbnailUpper;
