import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos: [],
      isClicked: true,
    };
  }
  
   handleClick = () => {
     this.state.isClicked ?
      this.setState({isClicked : false}):
        this.setState({isClicked : true})
      };
     
  handleChange = (event) => {
    this.setState({
     text:event.target.value ,
  })
    console.log(event.target.value)
  };

handleSubmit = (event) => {
  event.preventDefault()
    this.setState({todos : [...this.state.todos, this.state.text]})
    this.setState({text : ""})
}


  componentDidUpdate() {
    
    console.log(this.state.text)
  };

  componentDidMount() {
    console.log("Mount")
  };

  render() {
    return (
      <div className= "App">
       <form onSubmit={this.handleSubmit}>
        
        <input onChange={this.handleChange}  type= 'text' value={this.state.text}></input>
        <button onClick={this.handleClick }>Add todos</button> 

       </form>
       
       
       <ul>
      
         {this.state.todos.map((todo, index) => {
           return <li key={index}>{todo}</li>
         })}

       </ul>
        
      </div>
    );
  }

}

export default App;
