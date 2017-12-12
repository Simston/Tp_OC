class App extends React.Component{
  render(){
    return(
      <div>
        <Hello title="Googles" link="https://google.com" color="red"/>
        <Hello title="Instagram" link="https://instagram.com" color="green"/>
        <Hello title="Twitter" link="https://twitter.com" color="blue"/>
    </div>
      )   
  }
}

class Hello extends React.Component{
  render(){
      return <h1><a href={this.props.link} style={{color :this.props.color, textDecoration : 'none'}}>{this.props.title}</a></h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
    
    