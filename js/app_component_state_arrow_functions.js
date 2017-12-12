class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {count : 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Refactoring avec Arrow functions
  increment(){
    this.setState((prevState, props) =>(
     {count: prevState.count +1}
    ));
  }

  decrement(){
    if(this.state.count > 0){      
      this.setState((prevState, props)=>(
        {count: prevState.count -1}
      ));
    }
  }

  render(){
    return(
      <div>
        <h1 style={{color: this.props.color}}>Vous avez {this.state.count} copines.</h1>
        <button onClick={this.increment}>J'ai une nouvelle copine</button>
        <button onClick={this.decrement}>J'ai perdu une copine</button>
      </div>
    ) 
  }
}

function App(props){
  return(
     <div>
        <Counter color="green"/>
        <Counter color="red"/>
        <Counter color="orange"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
    
    