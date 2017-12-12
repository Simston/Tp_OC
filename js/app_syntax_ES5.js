var App = React.createClass({
      render: function() {
      //Ecriture Javascript Classique
      /*
        return React.DOM.div(null,
          React.createElement(Hello, {title: 'Google', link: 'https://google.com', color: 'red'}),
          React.createElement(Hello, {title: 'Instagram', link: 'https://instagram.com', color: 'green'}),
          React.createElement(Hello, {title: 'Twittter', link: 'https://twitter.com', color: 'blue'})
          )*/

          return (
           <div>
            <Hello title="Googles" link="https://google.com" color="red"/>
            <Hello title="Instagram" link="https://instagram.com" color="green"/>
            <Hello title="Twitter" link="https://twitter.com" color="blue"/>
          </div>
          )
      }
    });

var Hello = React.createClass({
      render(){ // sans fonction
      //Ecriture javascript classique
      /*  return h1(null, 
          a({href : this.props.link, style : {color : this.props.color, textDecoration:'none'}}, this.props.title))}*/

      //Ecriture JSX (JavaScript XML)
      return <h1><a href={this.props.link} style={{color :this.props.color, textDecoration : 'none'}}>{this.props.title}</a></h1>
    }
    });

/* Exemple création d'object literal */

var Simston = {
  nom : 'Simon',
  prenom : 'Stéphane',
  age : '30',

  // Création d'une méthode
  dance: function(){
    return this.nom + ' ' + this.prenom +' danse';
  }
}
console.log(Simston.nom); // Retourne le nom
console.log(Simston.dance());  // Appel de la méthode dance dans l'object Simston

/* Possibilité avec ES6 */
const a = {name: 'Test' , age : 45};

// Autre exemple pour let

if(2!==2){
  let toto = 'toto'
}
console.log(toto);

   // ReactDOM.render(React.createElement(App), document.getElementById('root'))
    ReactDOM.render(<App />, document.getElementById('root'))
    
    