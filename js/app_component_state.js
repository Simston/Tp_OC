class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {count : 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({count: this.state.count +1});
  }

  decrement(){
    if(this.state.count > 0){
      this.setState({count: this.state.count -1});
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

// Ici composant Stateless Composant sans State -----> Voir plus bas une autre méthode pour l'écrire
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Counter color="green"/>
//         <Counter color="red"/>
//         <Counter color="orange"/>
//       </div>
//       )
//   }
// }

//Ecriture d'une fonction pour un composabt Stateless
function App(props){
  return(
     <div>
        <Counter color="green"/>
        <Counter color="red"/>
        <Counter color="orange"/>
    </div>
  )
}

// Voici une autre méthode d'écriture d'une fonction en Javascript qui effectue exactement la même chose qu'au dessus.
// const App = function(){
//   return(
//      <div>
//         <Counter color="green"/>
//         <Counter color="red"/>
//         <Counter color="orange"/>
//     </div>
//   )
// }

// Arrow functions exemple 1
const hello = () => {
  console.log('hello world' );
}
hello();

// Arrow functions exemple 2 (passage de paramètre)
const hello2 = (name) => {
  console.log('Hello ' + name );
}
hello2('Stéphane');

// Arrow functions exemple 3 (avec backtick `` interpolation de variable)
const hello3 = (name) => {
  console.log(`Hello ${name}` );
}
hello3('Stéphane');

// Arrow functions exemple 4 
//(ici l'attribut name à une valeur par default si rien n'est passé dans name alors il prendras la valeur World)
const hello4 = (name = 'World') => {
  console.log('Hello ' + name );
}
hello4();

// IMPORTANT ########   binding du mot clé "this"  ###########
const Stephane = {
  name: 'Stephane Simon',
  languages: ['JavaScript', 'PHP', 'Java'],
  describe(){

    console.log(this);

    this.languages.forEach(function(language){
      // ici le this ne vaut rien
      console.log(this.name + ' code en '+ language) 
    })
  }
}
//Stephane.describe();

/* ------> ici une erreur est crée car au niveau de la function de callback à l'intérieur de describe,
   ne fais plus référence à notre object ici Stephane, nous devons donc trouver une solution pour passer le this.*/

   // Première solution
const Stephane2 = {
  name: 'Stephane Simon',
  languages: ['JavaScript', 'PHP', 'Java'],
  describe(){
    // Nous stockons ici le résultat de this et le passons dans le callback
    const that = this;
    this.languages.forEach(function(language){
      //ici that.name
      console.log(that.name + ' code en '+ language) 
    })
  }
}   
Stephane2.describe();

  // Deuxième solution l'utilisation de "bind"
const Stephane3 = {
  name: 'Stephane Simon 2',
  languages: ['JavaScript', 'PHP', 'Java'],
  describe(){
    this.languages.forEach(function(language){
      console.log(this.name + ' code en '+ language) 
      // ci-dessous le bind ici permet de faire référence au this passé de l'object stéphane dans la function de callback
    }.bind(this))
  }
}   
Stephane3.describe();

  // Troisième solution l'utilisation des Arrow functions
const Stephane4 = {
  name: 'Stephane Simon 3',
  languages: ['JavaScript', 'PHP', 'Java'],
  describe(){
    // le bind this ce fait automatiquement avec les Arrow functions
    this.languages.forEach((language) => {
      console.log(this.name + ' code en '+ language) 
    })
  }
}   
Stephane4.describe();

ReactDOM.render(<App />, document.getElementById('root'))
    
    