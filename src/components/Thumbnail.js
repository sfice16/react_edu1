import React from 'react';
import ThumbnailUpper from './ThumbnailUpper'
import ThumbnailLower from './ThumbnailLower'

class Thumbnail extends React.Component {
    render(){
        return (
          <div className="container">
            <div className="row">
              <ThumbnailUpper/>
              <ThumbnailUpper/>
              <ThumbnailUpper/>
            </div>
            <div className="row">
              <ThumbnailLower/>
              <ThumbnailLower/>
              <ThumbnailLower/>
              <ThumbnailLower/>
            </div>
          </div>
            );
      }
}

export default Thumbnail;
