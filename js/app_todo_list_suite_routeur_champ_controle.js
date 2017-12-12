const ROUTES = {
    home: '#/',
    completeTasks: '#/complete-tasks',
    incompleteTasks: '#/incomplete-tasks',
};
class TaskApp extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        
        this.state = {
            currentRoute:ROUTES.home,
            newTaskDescription:'',
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
componentDidMount(){
    window.location.hash = ROUTES.home;
    window.onhashchange = (e) =>{
        this.setState({currentRoute: window.location.hash});
    }
}
addTask(e){
    e.preventDefault;
    this.setState ((prevState) => {
        const newTask = {
            id: prevState.tasks.length +1,
            description: prevState.newTaskDescription,
            complete: false
        }
        return{
            newTaskDescription: '',
            //tasks: prevState.tasks.concat(newTask)
            //autre façon de concatener (Destructuring)   
            tasks: [...prevState.tasks, newTask]}
    });
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

handleChange(e){
    //console.log(e.target.value);
    this.setState({ newTaskDescription: e.target.value});
}
renderRoute(){
    switch(this.state.currentRoute){
        case ROUTES.completeTasks: return <TaskList tasks={this.completeTasks()} title="Complete Tasks" />;break;
        case ROUTES.home: return <TaskList tasks={this.allTasks()} title="All Tasks" />; break; 
        case ROUTES.incompleteTasks:return <TaskList tasks={this.incompleteTasks()} title="Incomplete Tasks" />;break;
        default: return <NotFound />
    }
}

    render(){
        return(
         <div>
             <ul>
                 <li><a href={ROUTES.home}> All Tasks</a></li>
                 <li><a href={ROUTES.completeTasks}>Complete Tasks</a></li>
                 <li><a href={ROUTES.incompleteTasks}>Incomplete Tasks</a></li>
             </ul>
        
        <form onSubmit={this.addTask}>
            <input type="text" onChange={this.handleChange} value={this.state.newTaskDescription} placeholder="Enter a description"/>
            <input type="submit" value="Add Task"/>
        </form>

        {this.renderRoute()}
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

const NotFound = (props) =>(
<h1> Page Not Found !!!</h1>
);

ReactDOM.render(<TaskApp />, document.getElementById('root'))