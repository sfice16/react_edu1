import React from 'react';

class InputForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
         items: [], id: '', name: ''
    };
  }

    handleChange(event) {
      this.setState({id: event.target.value});
    }

    handleChange2(event) {
      this.setState({name: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();  //브라우저의 기본이벤트를 막아버린다
      var newItem = {
        id: this.state.id,
        name: this.state.name
      };

      if (newItem.id === '' || newItem.name === ''){
        alert('Please fill all blanks');
      }else{

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        id:'',
        name:''
      }));
      }
    }

    render(){
        return (
          <div className="bigContainer">
            <div className="container">
              <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputType" className="col-sm-2 control-label">ID</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" value={this.state.id} onChange={this.handleChange} name="id" placeholder="id here"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputType" className="col-sm-2 control-label">NAME</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange2} name="name" placeholder="name here"/>
                    </div>
                    <div className="col-sm-3">
                      <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
              </form>
                <ul className="list-group">
                {
                  this.state.items.map((item, index) => {
                    const uniqueKey = 'userID_'+index;  //같은 값이들어가도 index를붙여 고유키가 생성된다
                    return(
                        <li className="list-group-item" key={uniqueKey}>Id = {item.id} / Name = {item.name}</li>
                    );
                  })
                }

                </ul>
            </div>
          </div>
        );
    }
}
      export default InputForm;
