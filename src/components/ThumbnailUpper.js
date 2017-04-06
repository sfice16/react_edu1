import React from 'react';
import images from './images.jpg';
import images2 from './38.jpg'

class ThumbnailUpper extends React.Component {
  constructor(){
    super();
    this.state = {
      img : null
    }
  }
    componentWillMount(){          //componenetDidMount(){} 역시 존재한다.
    this.setState({img: images2}); //State는 직접 조작하지말고 setState 컴포넌트로 하는것이 일반적 state관련된것은 render밖으로
    }

    changeImg(image){             //class(객체)내부에서 정의된 function은 render상에서 this.~~로 호출하게된다.
      this.setState({img: image});
    }

    render(){

        return (
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={this.state.img} alt={this.state.img}/>
                <div className="caption">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.content2}</p>
                  <p><button type="button" className="btn btn-primary" onClick={() => {this.changeImg(images)}}>say hello</button> <button type="button" className="btn btn-default" onClick={() => {this.changeImg(images2)}}>say goodbye</button></p>
                </div>
              </div>
            </div>
         );
      }
}
export default ThumbnailUpper;
