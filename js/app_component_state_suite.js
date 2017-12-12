class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {count : 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState(function(prevState, props){
      return{
        count: prevState.count +1
      }
    });
  }

  decrement(){
    if(this.state.count > 0){
      // ici il est recommandé d'utilisé la version de setStat() qui prend en paramètre une fonction
      // car si on utilise cette facon de faire le this.state.count peut être modifié de manière asynchrone
      // this.setState({count: this.state.count -1}); 
      this.setState(function(prevState, props){
          return{
            count: prevState.count -1
          }
      });
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
    
    