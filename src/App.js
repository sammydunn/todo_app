import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos: [],
      isClicked: false,
    };
  }

  handleChange = (event) => {
    this.setState({
     text:event.target.value ,
  })
    console.log(event.target.value)
  };
 
  handleClick = () => {
    this.setState({
    todos: (this.state.text)
    })
  };

 // handleClick = () => {
   // this.setState({
     // isClicked: !this.state.isClicked,
   // })
 // };


  componentDidUpdate() {
    
    console.log(this.state.text)
  };

  componentDidMount() {
    console.log("Mount")
  };

  render() {
    return (
      <div className= "App">
        <button onClick={this.handleClick }>Add todos</button> 
        <input onChange={this.handleChange}  type= 'text' value={this.state.text}></input>
        </div>
    );
  }

}

export default App;
