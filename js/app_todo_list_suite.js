
class TaskApp extends React.Component {
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
allTasks(){
    return this.state.tasks;
}
completeTasks(){
    return this.state.tasks.filter(task => task.complete);
}
incompleteTasks(){
    return this.state.tasks.filter(task => !task.complete);
}

    render(){
        return(
         <div>
          <TaskList tasks={this.allTasks()} title='All Tasks'/>
          <TaskList tasks={this.completeTasks()} title='Complete Tasks'/>
          <TaskList tasks={this.incompleteTasks()} title='Incomplete Tasks'/>
        </div>  
        )     
    }
}

const TaskList = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
);

const Task = (props) => (
<article>
        <h1>
          #{props.task.id} - {props.task.description}
          {props.task.complete ? ' ✅ ' : ' ❌ '}
        </h1>
 </article>
);

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