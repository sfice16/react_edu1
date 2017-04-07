import React from 'react';

class Input extends React.Component {
    render(){
        return (
          <div className="input-group input-group-lg">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
            </ul>
              <span className="input-group-addon" id="sizing-addon1">@</span>
              <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1"/>
          </div>
        );
    }
}
      export default Input;
