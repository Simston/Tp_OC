
class TaskApp extends React.Component {
    render(){
        return(
         <div>
          <TaskList />
        </div>  
        )     
    }
}

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {
                    id:1,
                    description: 'Go to bed',
                    complete: false
                },
                {
                    id:2,
                    description: 'Record a turotial',
                    complete: true
                },
                {
                    id:3,
                    description: 'Watch a movie',
                    complete: true
                }
            ]
        };
    }

    completeTasks(){
        return this.state.tasks.filter( task => task.complete);//ou task.complete === true
    }

    incompleteTasks(){
        return this.state.tasks.filter( task => !task.complete);// ou task.complete === false
        
    }

    
    render() {
        return (
            <div>
                <h1> All Tasks </h1>
                {this.state.tasks.map(task => <Task key={task.id} task={task}/>)}

                <h1>Incomplete Task</h1>
                {this.incompleteTasks().map(task => <Task key={task.id} task={task}/>)}

                <h1>Complete Task</h1>
                {this.completeTasks().map(task => <Task key={task.id} task={task}/>)}
                
            </div>
        )
    }
}

const Task = (props) => (
<article>
        <h1>
          #{props.task.id} - {props.task.description}
          {props.task.complete ? ' ✅ ' : ' ❌ '}
        </h1>
 </article>
)

ReactDOM.render(<TaskApp />, document.getElementById('root'))

// const numbers = [1,2,3,4,5];

// let doubles = [];
// for(let i = 0; i < numbers.length; i++){
//     doubles.push(numbers[i]*2);
// }
// console.log(doubles);

// // const doubles = numbers.map(function(number){
// // return number *2
// // });
// // console.log(doubles);

// const doubles1 = numbers.map(number => number*2);
// console.log(doubles1);